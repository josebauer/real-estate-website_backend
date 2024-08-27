import { Request, Response } from "express";
import { realEstateService } from "../services/realEstateService";
import { getPaginationParams } from "../helpers/getPaginationParams";

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

  // Method GET /real-estate/filter
  filter: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query);

    try {
      const filters = Object.entries(req.query).reduce((acc, [key, value]) => {
        if (['page', 'perPage'].includes(key)) return acc
  
        if (value) {
          acc[key] = isNaN(Number(value)) ? value : Number(value)
        }
  
        return acc
      }, {} as Record<string, any>)
  
      const filteredRealEstates = await realEstateService.findWithFilters(filters, page, perPage)
      return res.json(filteredRealEstates)
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