const { DataTypes } = require('sequelize');
const db = require('../database/database');
const Product = require('./product');

const Category = db.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING(255),
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

Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });

module.exports = Category;
