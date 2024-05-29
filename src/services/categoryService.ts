import { Category } from "../models"

export const categoryService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage

    const { count, rows } = await Category.findAndCountAll({
      attributes: ['id', 'name', 'position'],
      order: [['position', 'ASC']],
      limit: perPage,
      offset
    })

    return {
      categories: rows,
      page,
      perPage,
      total: count
    }
  },

  findByIdWithRealEstate: async(id: string) => {
    const categoryWithRealEstate = await Category.findByPk(id, {
      attributes: ['id', 'name'],
      include: {
        association: 'realEstate',
        attributes: [
          'id',
          'title',
          'price',
          'negotiation',
          'description',
          ['zip_code','zipCode'],
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
      }
    })

    return categoryWithRealEstate
  }
}