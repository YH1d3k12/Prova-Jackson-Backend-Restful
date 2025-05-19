const bcrypt = require('bcrypt');

class DataEncrypter {
    async HashPassword(password) {
        const saltRounds = 10;

        let hashedPassword = '';

        for (let i = 0; i < 10; i++) {
            console.log("Hashing password..." + (i + 1));
            hashedPassword = await bcrypt.hash(hashedPassword, saltRounds);
        }

        return hashedPassword;
    };
};

module.exports = DataEncrypter;
