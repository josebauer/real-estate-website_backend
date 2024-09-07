import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { realEstateController } from './controllers/realEstateController'
import { authController } from './controllers/authController'
import { favoriteController } from './controllers/favoritesController'
import { ensureAuth } from './middlewares/auth'
import { usersController } from './controllers/usersController'

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

router.get('/real-estate/featured', realEstateController.featured)
router.get('/real-estate/newest', realEstateController.newest)
router.get('/real-estate/filter', realEstateController.filter)
router.get('/real-estate/cities', realEstateController.cities)
router.get('/real-estate/:id', realEstateController.show)

router.get('/favorites', ensureAuth, favoriteController.index)
router.post('/favorites', ensureAuth, favoriteController.save)
router.delete('/favorites/:id', ensureAuth, favoriteController.delete)

router.get('/users/current', ensureAuth, usersController.show)
router.put('/users/current', ensureAuth, usersController.update)
router.put('/users/current/password', ensureAuth, usersController.updatePassword)

export { router } 