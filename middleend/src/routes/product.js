const express = require('express');

const ProductController = require('../controller/product.js');
const authMiddleware = require('../middleware/auth.js');
const controller = new ProductController();
const router = express.Router();

router.get('/', authMiddleware(), controller.GetProducts);
router.get('/:id', authMiddleware(), controller.GetProductById);
router.post('/', authMiddleware(), controller.CreateProduct);
router.put('/:id', authMiddleware(), controller.UpdateProduct);
router.delete('/:id', authMiddleware(), controller.DeleteProduct);

module.exports = router;
