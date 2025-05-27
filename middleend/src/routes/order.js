const express = require('express');

const OrderController = require('../controller/order.js');
const authMiddleware = require('../middleware/auth.js');
const controller = new OrderController();
const router = express.Router();

router.get('/', authMiddleware(), controller.GetOrders);
router.get('/:id', authMiddleware(), controller.GetOrderById);
router.post('/', authMiddleware(), controller.CreateOrder);
router.put('/:id', authMiddleware(), controller.UpdateOrder);
router.delete('/:id', authMiddleware(), controller.DeleteOrder);

module.exports = router;
