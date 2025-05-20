const CategoryRepository = require('../repository/category.js');

const repositories = new CategoryRepository();

class CategoryService {
    async GetCategories() {
        const categories = repositories.GetCategories();
        return categories;
    }

    async GetCategoryById(id) {
        const category = repositories.GetCategoryById(id);
        return category;
    }

    async CreateCategory(data) {
        const result = repositories.CreateCategory(data);
        return result;
    }

    async UpdateCategory(id, data) {
        const result = repositories.UpdateCategory(id, data);
        return result;
    }

    async DeleteCategory(id) {
        const result = repositories.DeleteCategory(id);
        return result;
    }
}


module.exports = CategoryService;