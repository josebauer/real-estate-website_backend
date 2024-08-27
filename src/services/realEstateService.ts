import { RealEstate } from "../models"

export const realEstateService = {
  findbyIdWithDetails: async (id: string) => {
    const realEstateWithDetails = await RealEstate.findByPk(id, {
      attributes: [
        'id',
        'title',
        'price',
        'negotiation',
        'description',
        ['zip_code', 'zipCode'],
        'address',
        'district',
        'city',
        'state',
        ['building_area', 'buildingArea'],
        ['total_area', 'totalArea'],
        'bedrooms',
        'suites',
        'garages',
        ['images_url', 'imagesUrl']
      ]
    })

    return realEstateWithDetails
  },

  getRandomFeaturedRealEstate: async () => {
    const featuredRealEstate = await RealEstate.findAll({
      attributes: [
        'id',
        'title',
        'price',
        'negotiation',
        'description',
        ['zip_code', 'zipCode'],
        'address',
        'district',
        'city',
        'state',
        ['building_area', 'buildingArea'],
        ['total_area', 'totalArea'],
        'bedrooms',
        'suites',
        'garages',
        ['images_url', 'imagesUrl']
      ],
      where: {
        featured: true
      }
    })

    const randomFeaturedRealEstate = featuredRealEstate.sort(() => 0.5 - Math.random())

    return randomFeaturedRealEstate
  },

  getTopTenNewest: async () => {
    const realEstate = await RealEstate.findAll({
      limit: 10,
      order: [['created_at', 'DESC']]
    })

    return realEstate
  },

  findWithFilters: async (filters: Record<string, any>, page: number, perPage: number) => {
    const offset = (page - 1) * perPage

    const where: Record<string, any> = {}

    Object.entries(filters).forEach(([key, value]) => {
      where[key] = value
    })  

    const { count, rows } = await RealEstate.findAndCountAll({
      attributes: [
        'id',
        'title',
        'price',
        'negotiation',
        'description',
        ['zip_code', 'zipCode'],
        'address',
        'district',
        'city',
        'state',
        ['building_area', 'buildingArea'],
        ['total_area', 'totalArea'],
        'bedrooms',
        'suites',
        'garages',
        ['images_url', 'imagesUrl'],
        ['category_id', 'categoryId']
      ],
      where,
      limit: perPage,
      offset
    })

    return {
      realEstate: rows,
      page,
      perPage,
      total: count
    }
  }
}