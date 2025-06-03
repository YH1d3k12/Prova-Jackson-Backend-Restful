const express = require('express');
const cors = require('cors');
const UserRouter = require('./routes/user.js');
const CategoryRouter = require('./routes/category.js');
const ProductRouter = require('./routes/product.js');
const OrderRouter = require('./routes/order.js');
const OrderItemsRouter = require('./routes/order-item.js');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;
const swaggerDocument = require('./docs/swagger.json');

app.use(express.json());
app.use(cors());

app.use('/api/user', UserRouter);
app.use('/api/category', CategoryRouter);
app.use('/api/product', ProductRouter);
app.use('/api/order', OrderRouter);
app.use('/api/order/:orderId/item', OrderItemsRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API Documentation is available at http://localhost:${PORT}/api/docs`);
});
