const ProductService = require('../service/product');

const services = new ProductService();

class ProductController {
    async GetProducts(req, res) {
        try {
            const products = await services.GetProducts();
            res.status(200).json({ data: products });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async GetProductById(req, res) {
        try {
            const product = await services.GetProductById(req.params.id);
            res.status(200).json({ data: product });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async CreateProduct(req, res) {
        try {
            const data = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock_quantity: req.body.stockQuantity,
                category_id: req.body.categoryId,
            }

            const result = await services.CreateProduct(data);

            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async UpdateProduct(req, res) {
        try {
            const data = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock_quantity: req.body.stockQuantity,
                category_id: req.body.categoryId,
            }

            const result = await services.UpdateProduct(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async DeleteProduct(req, res) {
        try {
            const result = await services.DeleteProduct(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };
}

module.exports = ProductController;
