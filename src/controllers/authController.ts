import { Request, Response } from "express";
import { userService } from "../services/userService";
import { jwtService } from "../services/jwtService";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const authController = {
  // Method POST /auth/register
  register: async (req: Request, res: Response) => {
    const { firstName, lastName, phone, email, password } = req.body

    try {
      const userAlreadyExists = await userService.findByEmail(email)

      if (userAlreadyExists) {
        throw new Error('Este email já está cadastrado!')
      }

      const user = await userService.create({
        firstName,
        lastName,
        phone,
        email,
        password,
        role: 'user'
      })

      return res.status(201).json(user)

    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  // Method POST /auth/login
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
      const user = await userService.findByEmail(email)

      if (!user) return res.status(404).json({ message: 'E-mail não registrado!' })

      user.checkPassword(password, (error, isSame) => {
        if (error) return res.status(400).json({ message: error.message })
        if (!isSame) return res.status(401).json({ message: 'Senha incorreta!' })

        const payload = {
          id: user.id,
          firstName: user.firstName,
          email: user.email
        }

        const token = jwtService.signToken(payload, '1d')

        return res.json({ authenticated: true, ...payload, token })
      })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  // Method POST /auth/forgot-password
  forgotPassword: async (req: Request, res: Response) => {
    const { email } = req.body

    try {
      const user = await userService.findByEmail(email)
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' })
      }

      const resetCode = await userService.generateResetCode(user.id)

      await transporter.sendMail({
        from: `"Imobiliária JH" <contato.imobiliariajh@gmail.com>`,
        to: user.email,
        subject: 'Não responda - Código de Recuperação de Senha',
        text: `Olá, ${user.firstName}!\n\nSeu código de recuperação de senha é: ${resetCode}\n\nEle irá expirar em 10 minutos.`,
      })

      return res.json({ message: 'Código de recuperação enviado para o e-mail.' })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: 'Erro ao enviar o código de recuperação.', error: error.message })
      }
    }
  },

  // Method POST /auth/verify-reset-code
  verifyResetCode: async (req: Request, res: Response) => {
    const { email, code } = req.body;

    try {
      await userService.verifyResetCode(email, code);
      return res.json({ message: 'Código verificado com sucesso.' })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  // Method POST /auth/reset-password
  resetPassword: async (req: Request, res: Response) => {
    const { email, code, newPassword } = req.body

    try {
      const user = await userService.verifyResetCode(email, code)
      await userService.updatePassword(user.id, newPassword)
      return res.json({ message: 'Senha redefinida com sucesso.' })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },
}