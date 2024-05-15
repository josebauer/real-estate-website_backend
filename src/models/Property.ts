import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Property {
  id: number,
  title: string,
  price: number,
  negotiation: string,
  description: string,
  address: string,
  buildingArea: number,
  totalArea: number,
  bedrooms: number,
  suites: number,
  garage: number,
  imagesUrl: string,
  featured: boolean,
  categoryId: number,
}

export interface PropertyCreationAttributes extends Optional<Property, 
'id' | 'price' | 'buildingArea' | 'totalArea' | 'bedrooms' | 'suites' | 'garage' | 'imagesUrl' | 'featured'> { }

export interface PropertyInstance extends Model<Property, PropertyCreationAttributes>, Property { }

export const Property = sequelize.define<PropertyInstance, Property>('Property', {
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
    type: DataTypes.DECIMAL
  },
  negotiation: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  address: {
    allowNull: false,
    type: DataTypes.TEXT
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
  garage: {
    type: DataTypes.INTEGER
  },
  imagesUrl: {
    type: DataTypes.STRING
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