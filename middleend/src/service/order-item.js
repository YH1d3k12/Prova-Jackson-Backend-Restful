const OrderItemRepository = require('../repository/order-item.js');

const repositories = new OrderItemRepository();

class OrderItemService {
    async GetOrderItems() {
        const orderItems = repositories.GetOrderItems();
        return orderItems;
    }

    async GetOrderItemById(id) {
        const OrderItem = repositories.GetOrderItemById(id);
        return OrderItem;
    }

    async CreateOrderItem(data) {
        const result = repositories.CreateOrderItem(data);
        return result;
    }

    async UpdateOrderItem(id, data) {
        const result = repositories.UpdateOrderItem(id, data);
        return result;
    }

    async DeleteOrderItem(id) {
        const result = repositories.DeleteOrderItem(id);
        return result;
    }
}

module.exports = OrderItemService;
