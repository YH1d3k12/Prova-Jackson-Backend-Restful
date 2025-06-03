const UserRepository = require('../repository/user.js');
const DataValidation = require('../utils/validation.js');
const repository = new UserRepository();
const verify = new DataValidation();
class ClientServices {
    async GetUsers() {
        const users = repository.GetUsers();
        return users;
    };

    async GetUserById(id, transaction) {
        verify.isIdValid(id);

        const user = repository.GetUserById(id, transaction);
        return user;
    };

    async CreateUser(data, transaction) {
        verify.isItEmpty(data.email, data.password);

        const user = repository.CreateUser(data, transaction);
        return user;
    };

    async UpdateUser(id, data, transaction) {
        const result = repository.UpdateUser(id, data, transaction);
        return result;
    };

    async DeleteClient(id, transaction) {
        verify.isIdValid(id);

        const result = repository.DeleteClient(id, transaction);
        return result;
    };

    async FindUserByEmail(email) {
        return repository.FindUserByEmail(email);
    };
};

module.exports = ClientServices;
