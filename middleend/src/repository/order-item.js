const OrderItem = require('../model/order-item');

class OrderItemRepository {
    async GetOrderItems() {
        const orderItems = OrderItem.findAll();
        return orderItems;
    };

    async GetOrderItemById(id) {
        const OrderItem = OrderItem.findOne(
            {
                where: id
            }
        )

        return OrderItem;
    };

    async CreateOrderItem(data) {
        OrderItem.create(
            {
                product_id: data.product_id,
                order_id: data.order_id,
                created_at: new Date()
            }
        )
    };

    async UpdateOrderItem(id, data) {
        OrderItem.update(
            {
                product_id: data.product_id,
                order_id: data.order_id,
                updated_at: new Date()
            },
            { where: { id } },
        );
    };

    async DeleteOrderItem(id) {
        OrderItem.destroy(
            { where: { id } }
        );
    };
};

module.exports = OrderItemRepository;
