import express from 'express'
import { createOrder, getAllOrders, getOrder, getOrderLocation, getUserOrders, updateOrderStatus} from '../controllers/orderController.js'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
const orderRoutes = express.Router()

orderRoutes.post('/', auth, createOrder)
orderRoutes.get('/', auth, getUserOrders)
orderRoutes.get('/all', auth, admin, getAllOrders)
orderRoutes.get('/:id', auth, getOrder)
orderRoutes.put('/:id/status', auth, admin, updateOrderStatus)
orderRoutes.get('/:id/location', auth, getOrderLocation)


export default orderRoutes


