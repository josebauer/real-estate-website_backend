import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { componentLoader } from './resources/realEstate';
import { Category, RealEstate, User } from "../models";
import bcrypt from "bcrypt";
import { locale } from "./locale";

AdminJS.registerAdapter(AdminJSSequelize)

const Components = {
  Dashboard: componentLoader.add('Dashboard', './components/Dashboard'),
};

export const adminJS = new AdminJS({
  componentLoader,
  databases: [sequelize],
  rootPath: '/admin',
  resources: adminJsResources,
  branding: {
    companyName: 'Imobiliária JH',
    logo: '/logo.svg',
    theme: {
      colors: {
        primary100: '#111350',
        grey100: '#151515',
        grey80: '#333333',
        grey60: '#4d4d4d',
        grey40: '#111350',
        grey20: '#dddddd',
        filterBg: '#ECECEC',
        accent: '#ECECEC',
        hoverBg: '#ECECEC'
      }
    }
  },
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
  }

})

adminJS.watch()

export const adminJSRouter = AdminJSExpress.buildAuthenticatedRouter(adminJS, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ where: { email } })

    if (user && user.role === 'admin') {
      const matched = await bcrypt.compare(password, user.password)

      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: 'cookie-password'
}, null, {
  resave: false,
  saveUninitialized: false
})