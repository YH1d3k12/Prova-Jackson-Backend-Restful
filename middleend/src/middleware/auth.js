const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

function authMiddleware() {

    return (req, res, next) => {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        jwt.verify(token, config.secret, (err) => {
            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            next();
        });
    }
};

module.exports = authMiddleware;
