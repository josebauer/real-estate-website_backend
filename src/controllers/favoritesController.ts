import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { favortiteService } from "../services/favoriteService";

export const favoriteController = {
  // Method GET /favorites
  index: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id

    try {
      const favorites = await favortiteService.findByUserId(userId)
      return res.json(favorites)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },
  
  // Method POST /favorites
  save: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id
    const { realEstateId } = req.body

    try {
      const favorite = await favortiteService.create(userId, Number(realEstateId))
      return res.status(201).json(favorite)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  // Method DELETE /favorites/:id
  delete: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id
    const realEstateId = req.params.id

    try {
      await favortiteService.delete(userId, Number(realEstateId))
      return res.status(204).send()
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  }
}