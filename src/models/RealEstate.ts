import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface RealEstate {
  id: number,
  title: string,
  price: string,
  negotiation: 'venda' | 'locação',
  description: string,
  zipCode: string,
  address: string,
  district: string,
  city: string,
  state: string,
  buildingArea: number,
  totalArea: number,
  bedrooms: number,
  suites: number,
  garages: number,
  imagesUrl: Array<String>,
  featured: boolean,
  categoryId: number,
}

export interface RealEstateCreationAttributes extends Optional<RealEstate, 
'id' | 'price' | 'buildingArea' | 'totalArea' | 'bedrooms' | 'suites' | 'garages' | 'imagesUrl' | 'featured'> { }

export interface RealEstateInstance extends Model<RealEstate, RealEstateCreationAttributes>, RealEstate { }

export const RealEstate = sequelize.define<RealEstateInstance, RealEstate>('RealEstate', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.STRING
  },
  negotiation: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  zipCode: {
    allowNull: false,
    type: DataTypes.STRING
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING
  },
  district: {
    allowNull: false,
    type: DataTypes.STRING
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING
  },
  buildingArea: {
    type: DataTypes.DECIMAL
  },
  totalArea: {
    type: DataTypes.DECIMAL
  },
  bedrooms: {
    type: DataTypes.INTEGER
  },
  suites: {
    type: DataTypes.INTEGER
  },
  garages: {
    type: DataTypes.INTEGER
  },
  imagesUrl: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  featured: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'categories', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }
}) 