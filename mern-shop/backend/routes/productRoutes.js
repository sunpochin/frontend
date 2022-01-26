import express from 'express';
const router = express.Router();
import {
	getProductById,
	getProducts,
} from '../controllers/productController.js';

// router.get('/', getProducts);
router.route('/').get(getProducts);

//router.get( '/:id', getProductById);
router.route('/:id').get(getProductById);

export default router;
