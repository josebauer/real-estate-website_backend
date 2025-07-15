import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";
import { sendEmail } from "../utils/emailService";

export const usersController = {
  // Method GET /users/current
  show: async (req: AuthenticatedRequest, res: Response) => {
    try {
      const currentUser = req.user!
      return res.json(currentUser)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  // Method PUT /users/current
  update: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.user!
    const { firstName, lastName, phone, email } = req.body

    try {
      const updatedUser = await userService.update(id, {
        firstName,
        lastName,
        phone,
        email
      })

      await sendEmail(
        email,
        'Atualização de Cadastro',
        `Olá, ${firstName}!\n\nSeus dados foram atualizados com sucesso!.\nCaso não tenha sido você, recomendamos que altere sua senha.\n\nImobiliária JH`
      );

      return res.json(updatedUser)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  // Method PUT /users/current/password
  updatePassword: async (req: AuthenticatedRequest, res: Response) => {
    const user = req.user!
    const { currentPassword, newPassword } = req.body

    user.checkPassword(currentPassword, async (error, isSame) => {
      try {
        if (error) return res.status(400).json({ message: error.message })
        if (!isSame) return res.status(400).json({ message: 'Senha incorreta!' })

        await userService.updatePassword(user.id, newPassword)
        
        return res.status(204).send()
      } catch (error) {
        if (error instanceof Error) {
          return res.status(400).json({ message: error.message })
        }
      }
    })

  }
}