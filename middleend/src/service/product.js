const ProductRepository = require('../repository/product');

const repositories = new ProductRepository();

class ProductService {
    async GetProducts() {
        const products = repositories.GetProducts();
        return products;
    }

    async GetProductById(id) {
        const product = repositories.GetProductById(id);
        return product;
    }

    async CreateProduct(data) {
        const result = repositories.CreateProduct(data);
        return result;
    }

    async UpdateProduct(id, data) {
        const result = repositories.UpdateProduct(id, data);
        return result;
    }

    async DeleteProduct(id) {
        const result = repositories.DeleteProduct(id);
        return result;
    }
}

module.exports = ProductService;
