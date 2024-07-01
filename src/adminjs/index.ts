import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { componentLoader } from './components';
import { Category, RealEstate, User } from "../models";
import { locale } from "./locale";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";
import { Components } from "./components";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJS = new AdminJS({
  componentLoader,
  databases: [sequelize],
  rootPath: '/admin',
  resources: adminJsResources,
  branding: brandingOptions,
  locale: locale,
  dashboard: {
    component: Components.Dashboard,
    handler: async (req, res, context) => {
      const realEstate = await RealEstate.count()
      const categories = await Category.count()
      const standardUsers = await User.count({ where: { role: 'user' } })

      res.json({
        'Imóveis': realEstate,
        'Categorias': categories,
        'Usuários': standardUsers
      })
    }
  },
})

adminJS.watch()

export const adminJSRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJS,
  authenticationOptions,
  null,
  {
    resave: false,
    saveUninitialized: false
  }
)