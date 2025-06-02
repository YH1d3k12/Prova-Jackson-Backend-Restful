const OrderItemService = require('../service/order-item');

const services = new OrderItemService();

class OrderItemController {
    async GetOrderItems(req, res) {
        try {
            const OrderItems = await services.GetOrderItems();
            res.status(200).json({ data: OrderItems });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async GetOrderItemById(req, res) {
        try {
            const OrderItem = await services.GetOrderItemById(req.params.id);
            res.status(200).json({ data: OrderItem });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async CreateOrderItem(req, res) {
        try {
            const data = {
                order_id: req.param.orderId,
                product_id: req.body.product_id,
            }

            const result = await services.CreateOrderItem(data);

            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async UpdateOrderItem(req, res) {
        try {
            const data = {
                order_id: req.param.orderId,
                product_id: req.body.product_id,
            }

            const result = await services.UpdateOrderItem(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async DeleteOrderItem(req, res) {
        try {
            const result = await services.DeleteOrderItem(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };
}

module.exports = OrderItemController;
