import express  from "express";
import { createProduct, delateProduct, getFlashDeals, getProduct, getProducts, updateProduct } from "../controllers/productController.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
const productRouter = express.Router();

productRouter.get('/flash-deals', getFlashDeals)
productRouter.get('/', getProducts)
productRouter.get('/:id', getProduct)
productRouter.get('/', auth, admin, createProduct)
productRouter.put('/:id', auth, admin, updateProduct)
productRouter.delete('/:id', auth, admin, delateProduct)


export default productRouter


