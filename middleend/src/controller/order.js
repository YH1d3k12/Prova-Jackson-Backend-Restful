const OrderService = require('../service/order');

const services = new OrderService();

class OrderController {
    async GetOrders(req, res) {
        try {
            const Orders = await services.GetOrders();
            res.status(200).json({ data: Orders });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async GetOrderById(req, res) {
        try {
            const Order = await services.GetOrderById(req.params.id);
            res.status(200).json({ data: Order });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async CreateOrder(req, res) {
        try {
            const data = {
                date: req.body.date,
            }

            const result = await services.CreateOrder(data);

            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async UpdateOrder(req, res) {
        try {
            const data = {
                date: req.body.date,
            }

            const result = await services.UpdateOrder(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async DeleteOrder(req, res) {
        try {
            const result = await services.DeleteOrder(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };
}

module.exports = OrderController;
