import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJS = new AdminJS({
  databases: [sequelize], 
  rootPath: '/admin',
  resources: adminJsResources,
  branding: {
    companyName: 'Imobiliária JH',
    logo: '/logo.svg'
  }
})

export const adminJSRouter = AdminJSExpress.buildRouter(adminJS)