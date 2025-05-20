const Category = require('../model/category.js');

class CategoryRepository {
    async GetCategories() {
        const categories = Category.findAll();
        return categories;
    };

    async GetCategoryById(id) {
        const category = Category.findOne(
            {
                where: id
            }
        )

        return category;
    };

    async CreateCategory(data) {
        Category.create(
            {
                description: data.description,
                created_at: new Date()
            }
        )
    };

    async UpdateCategory(id, data) {
        Category.update(
            {
                description: data.description,
                updated_at: new Date()
            },
            { where: { id } },
        );
    };

    async DeleteCategory(id) {
        Category.destroy(
            { where: { id } }
        );
    };
};

module.exports = CategoryRepository;
