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

  // Method GET /real-estate/cities
  cities: async (req: Request, res: Response) => {
    try {
      const cities = await realEstateService.getDistinctCities()
      res.json(cities)
    } catch (error) {
      console.error("Erro ao obter cidades:", error);
      res.status(500).json({ message: "Erro ao buscar cidades" })
    }
  },

  // Method GET /real-estate/districts
  districts: async (req: Request, res: Response) => {
    const { city } = req.query
  
    try {
      if (!city || typeof city !== 'string') {
        return res.status(400).json({ message: "Cidade não informada ou inválida." });
      }
  
      const districts = await realEstateService.getDistrictsByCities(city)
      res.json(districts)
    } catch (error) {
      console.error("Erro ao obter bairros:", error);
      res.status(500).json({ message: "Erro ao buscar bairros" });
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