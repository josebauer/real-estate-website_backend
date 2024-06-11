import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { realEstateController } from './controllers/realEstateController'
import { authController } from './controllers/authController'

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

router.get('/real-estate/featured', realEstateController.featured)
router.get('/real-estate/newest', realEstateController.newest)
router.get('/real-estate/filter', realEstateController.filter)
router.get('/real-estate/:id', realEstateController.show)


export { router } 