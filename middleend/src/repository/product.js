const Product = require('../model/product');
const Category = require('../model/category');

class ProductRepository {
    async GetProducts() {
        const products = Product.findAll();
        return products;
    };

    async GetProductById(id) {
        const product = Product.findOne(
            {
                where: id,
                include: [
                    {
                        model: Category,
                        attributes: ['description']
                    }
                ]
            }
        )

        return product;
    };

    async CreateProduct(data) {
        Product.create(
            {
                name: data.name,
                description: data.description,
                price: data.price,
                stock_quantity: data.stockQuantity,
                category_id: data.categoryId,
                created_at: new Date()
            }
        )
    };

    async UpdateProduct(id, data) {
        Product.update(
            {
                name: data.name,
                description: data.description,
                price: data.price,
                stock_quantity: data.stockQuantity,
                category_id: data.categoryId,
                updated_at: new Date()
            },
            { where: { id } },
        );
    };

    async DeleteProduct(id) {
        Product.destroy(
            { where: { id } }
        );
    };
}