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
        'garage',
        ['images_url', 'imagesUrl']
      ]
    })

    return realEstateWithDetails
  }
}