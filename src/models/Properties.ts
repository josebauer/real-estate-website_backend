import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Properties {
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

export interface PropertiesCreationAttributes extends Optional<Properties, 
'id' | 'price' | 'buildingArea' | 'totalArea' | 'bedrooms' | 'suites' | 'garage' | 'imagesUrl' | 'featured'> { }

export interface PropertiesInstance extends Model<Properties, PropertiesCreationAttributes>, Properties { }

export const Properties = sequelize.define<PropertiesInstance, Properties>('Properties', {
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