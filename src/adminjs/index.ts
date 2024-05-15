import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { componentLoader } from './resources/properties'

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJS = new AdminJS({
  componentLoader,
  databases: [sequelize], 
  rootPath: '/admin',
  resources: adminJsResources,
  branding: {
    companyName: 'Imobiliária JH',
    logo: '/logo.svg'
  }
})

adminJS.watch() 

export const adminJSRouter = AdminJSExpress.buildRouter(adminJS)