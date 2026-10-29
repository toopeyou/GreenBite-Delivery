import express from 'express';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';
import { assignDeliveryPartner, createDeliveryPartner, gerDeliveryPartners, getAdminStats, updateDeliveryPartner } from '../controllers/adminsController.js';

const adminRoutes = express.Router();

adminRoutes.get('/stats', auth,admin, getAdminStats);
adminRoutes.get('/delivery-partners', auth,admin, gerDeliveryPartners);
adminRoutes.post('/delivery-partners', auth,admin, createDeliveryPartner);
adminRoutes.put('/delivery-partners/:id', auth,admin, updateDeliveryPartner);
adminRoutes.put('/orders/:id/assign', auth,admin, assignDeliveryPartner);

export default adminRoutes
