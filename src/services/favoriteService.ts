import { Favorite } from "../models"

export const favortiteService = {
  create: async (userId: number, realEstateId: number) => {
    const favorite = Favorite.create({
      realEstateId,
      userId
    })

    return favorite
  }
}