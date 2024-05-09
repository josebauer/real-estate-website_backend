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
  bedrooms: number,
  suites: number,
  garage: number,
  mainImage: string,
  secondaryImages: string,
  featured: boolean,
  categoryId: number,
}

export interface PropertiesCreationAttributes extends Optional<Properties, 'id' | 'price' | 'suites' | 'mainImage' | 'secondaryImages' | 'featured'> { }

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
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  bedrooms: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  suites: {
    type: DataTypes.INTEGER
  },
  garage: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  mainImage: {
    type: DataTypes.STRING
  },
  secondaryImages: {
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