import { Request, Response } from "express";
import { userService } from "../services/userService";
import { jwtService } from "../services/jwtService";

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
  }
}