import { Request, Response } from "express";
import { realEstateService } from "../services/realEstateService";

export const realEstateController = {
  // Method GET /real-estate/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const realEstate = await realEstateService.findbyIdWithDetails(id)
      return res.json(realEstate)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  }
}