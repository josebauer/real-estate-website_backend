import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'real_estate_development',
  username: 'realestate',
  password: 'realestate',
  define: {
    underscored: true
  }
})