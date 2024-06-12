import { Favorite } from "../models"

export const favortiteService = {
  findByUserId: async(userId: number) => {
    const favorites = await Favorite.findAll({
      attributes: [['user_id', 'userId']],
      where: { userId },
      include: {
        association: 'RealEstate',
        attributes: [
          'id',
          'title',
          'price',
          'negotiation',
          'district',
          'city',
          'state',
          ['building_area', 'buildingArea'],
          'bedrooms',
          'suites',
          'garages',
          ['images_url', 'imagesUrl']
        ]
      }
    })

    return {
      userId,
      realEstate: favorites.map(favorite => favorite.RealEstate)
    }
  },

  create: async (userId: number, realEstateId: number) => {
    const favorite = Favorite.create({
      realEstateId,
      userId
    })

    return favorite
  }
}