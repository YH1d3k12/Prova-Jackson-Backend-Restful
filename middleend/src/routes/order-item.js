const express = require('express');

const OrderItemController = require('../controller/order-item.js');
const authMiddleware = require('../middleware/auth.js');
const controller = new OrderItemController();
const router = express.Router();

router.get('/', authMiddleware(), controller.GetOrderItems);
router.get('/:id', authMiddleware(), controller.GetOrderItemById);
router.post('/', authMiddleware(), controller.CreateOrderItem);
router.put('/:id', authMiddleware(), controller.UpdateOrderItem);
router.delete('/:id', authMiddleware(), controller.DeleteOrderItem);

module.exports = router;
