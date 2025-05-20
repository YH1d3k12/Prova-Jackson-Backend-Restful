const express = require('express');

const CategoryController = require('../controller/category.js');
const authMiddleware = require('../middleware/auth.js');
const controller = new CategoryController();
const router = express.Router();

router.get('/', authMiddleware(), controller.GetCategories);
router.get('/:id', authMiddleware(), controller.GetCategoryById);
router.post('/', authMiddleware(), controller.CreateCategory);
router.put('/:id', authMiddleware(), controller.UpdateCategory);
router.delete('/:id', authMiddleware(), controller.DeleteCategory);

module.exports = router;
