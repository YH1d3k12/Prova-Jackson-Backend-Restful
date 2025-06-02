const Order = require('../model/order');

class OrderRepository {
    async GetOrders() {
        const orders = Order.findAll();
        return orders;
    };

    async GetOrderById(id) {
        const Order = Order.findOne(
            {
                where: id
            }
        )

        return Order;
    };

    async CreateOrder(data) {
        Order.create(
            {
                date: data.date,
                created_at: new Date()
            }
        )
    };

    async UpdateOrder(id, data) {
        Order.update(
            {
                date: data.date,
                updated_at: new Date()
            },
            { where: { id } },
        );
    };

    async DeleteOrder(id) {
        Order.destroy(
            { where: { id } }
        );
    };
};

module.exports = OrderRepository;
