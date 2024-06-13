import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";

export const usersController = {
  // Method GET /users/current
  show: async(req: AuthenticatedRequest, res: Response) => {
    try {
      const currentUser = req.user!
      return res.json(currentUser)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  }
}