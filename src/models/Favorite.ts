import { DataTypes, Model } from "sequelize";
import { RealEstateInstance } from "./RealEstate";
import { UserInstance } from "./User";
import { sequelize } from "../database";

export interface Favorite {
  userId: number,
  realEstateId: number
}

export interface FavoriteInstance extends Model<Favorite>, Favorite { 
  RealEstate?: RealEstateInstance
  User?: UserInstance
}

export const Favorite = sequelize.define<FavoriteInstance, Favorite>('Favorite', {
  userId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  realEstateId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'realEstates',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },

})

