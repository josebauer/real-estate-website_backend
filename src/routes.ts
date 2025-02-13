import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { realEstateController } from './controllers/realEstateController'
import { authController } from './controllers/authController'
import { favoriteController } from './controllers/favoritesController'
import { ensureAuth } from './middlewares/auth'
import { usersController } from './controllers/usersController'
import { scheduleController } from './controllers/schedulesController'

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.post('/auth/forgot-password', authController.forgotPassword)
router.post('/auth/verify-reset-code', authController.verifyResetCode)
router.post('/auth/reset-password', authController.resetPassword)

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

router.get('/real-estate/featured', realEstateController.featured)
router.get('/real-estate/newest', realEstateController.newest)
router.get('/real-estate/filter', realEstateController.filter)
router.get('/real-estate/cities', realEstateController.cities)
router.get('/real-estate/districts', realEstateController.districts)
router.get('/real-estate/:id', realEstateController.show)

router.get('/favorites', ensureAuth, favoriteController.index)
router.post('/favorites', ensureAuth, favoriteController.save)
router.delete('/favorites/:id', ensureAuth, favoriteController.delete)
router.patch('/favorites/status/:id', ensureAuth, favoriteController.status)

router.get('/schedules', ensureAuth, scheduleController.index)
router.post('/schedules', ensureAuth, scheduleController.save)
router.delete('/schedules/:id', ensureAuth, scheduleController.delete)
router.patch('/schedules/:id/status', ensureAuth, scheduleController.updateStatus)

router.get('/users/current', ensureAuth, usersController.show)
router.put('/users/current', ensureAuth, usersController.update)
router.put('/users/current/password', ensureAuth, usersController.updatePassword)

export { router } 