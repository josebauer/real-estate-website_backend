import { Request, Response } from "express";
import { realEstateService } from "../services/realEstateService";

export const realEstateController = {
  // Method GET /real-estate/fetured
  featured: async (req: Request, res: Response) => {
    try {
      const featuredRealEstate = await realEstateService.getRandomFeaturedRealEstate()
      return res.json(featuredRealEstate)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  // Method GET /real-estate/newest
  newest: async (req: Request, res: Response) => {
    try {
      const newestRealEstate = await realEstateService.getTopTenNewest()
      return res.json(newestRealEstate)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  filter: async (req: Request, res: Response) => {
    const { negotiation } = req.query

    try {
      if (typeof negotiation !== 'string') throw new Error('negotiation param must be of type string')
      const filterRealEstate = await realEstateService.findByNegotitationType(negotiation)
      return res.json(filterRealEstate)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

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
  },

}