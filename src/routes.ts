import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { realEstateController } from './controllers/realEstateController'

const router = express.Router()

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

router.get('/real-estate/:id', realEstateController.show)

export { router } 