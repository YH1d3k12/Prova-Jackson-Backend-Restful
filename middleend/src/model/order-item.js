const { DataTypes } = require('sequelize');
const db = require('../database/database');

const OrderItem = db.define('order_item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'order',
            key: 'id'
        },
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'product',
            key: 'id'
        },
        allowNull: false
    },
    created_at: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        field: 'updated_at',
        type: DataTypes.DATE
    },
}, {});

OrderItem.belongsTo(db.models.product, { foreignKey: 'product_id' });
OrderItem.belongsTo(db.models.order, { foreignKey: 'order_id' });
module.exports = Product;
