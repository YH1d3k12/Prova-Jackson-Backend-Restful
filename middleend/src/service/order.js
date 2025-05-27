const OrderRepository = require('../repository/order.js');

const repositories = new OrderRepository();

class OrderService {
    async GetOrders() {
        const orders = repositories.GetOrders();
        return orders;
    }

    async GetOrderById(id) {
        const Order = repositories.GetOrderById(id);
        return Order;
    }

    async CreateOrder(data) {
        const result = repositories.CreateOrder(data);
        return result;
    }

    async UpdateOrder(id, data) {
        const result = repositories.UpdateOrder(id, data);
        return result;
    }

    async DeleteOrder(id) {
        const result = repositories.DeleteOrder(id);
        return result;
    }
}


module.exports = OrderService;