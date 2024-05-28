import express from 'express'
import { categoriesController } from './controllers/CategoriesController'

const router = express.Router()

router.get('/categories', categoriesController.index)

export { router } 