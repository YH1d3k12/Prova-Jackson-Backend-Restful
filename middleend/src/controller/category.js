const CategoryService = require('../service/category.js');

const services = new CategoryService();

class CategoryController {
    async GetCategories(req, res) {
        try {
            const categories = await services.GetCategories();
            res.status(200).json({ data: categories });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async GetCategoryById(req, res) {
        try {
            const category = await services.GetCategoryById(req.params.id);
            if (!category) {
                return res.status(404).json({ message: "Category not found" });
            }
            res.status(200).json({ data: category });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async CreateCategory(req, res) {
        try {
            const data = {
                description: req.body.description,
            }

            const result = await services.CreateCategory(data);

            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async UpdateCategory(req, res) {
        try {
            const data = {
                description: req.body.description,
            }

            const result = await services.UpdateCategory(req.params.id, data);
            if (!result) {
                return res.status(404).json({ message: "Category not found" });
            }
            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async DeleteCategory(req, res) {
        try {
            const result = await services.DeleteCategory(req.params.id);
            if (!result) {
                return res.status(404).json({ message: "Category not found" });
            }
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };
}

module.exports = CategoryController;
