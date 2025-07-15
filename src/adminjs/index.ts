import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { componentLoader } from './components';
import { Category, RealEstate, Schedule, User } from "../models";
import { locale } from "./locale";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";
import { Components } from "./components";
import session from "express-session";
import connectSession from "connect-session-sequelize"
import { ADMINJS_COOKIE_PASS } from "../config/environment";

const SequelizeStore = connectSession(session.Store)
const store = new SequelizeStore({ db: sequelize })
store.sync()

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
      const schedules = await Schedule.count()
      const pendingSchedules = await Schedule.count({ where: { status: 'pendente' } })
      const confirmedSchedules = await Schedule.count({ where: { status: 'confirmado' } })
      const canceledSchedules = await Schedule.count({ where: { status: 'cancelado' } })

      res.json({
        'Imóveis Cadastrados': realEstate,
        'Categorias Cadastradas': categories,
        'Usuários Cadastrados': standardUsers,
        'Agendamentos Realizados': schedules,
        'Agendamentos Pendentes': pendingSchedules,
        'Agendamentos Confirmados': confirmedSchedules,
        'Agendamentos Cancelados': canceledSchedules
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
    saveUninitialized: false,
    store: store,
    secret: ADMINJS_COOKIE_PASS
  }
)