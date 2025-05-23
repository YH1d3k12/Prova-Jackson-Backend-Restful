const express = require('express');
const cors = require('cors');
const UserRouter = require('./routes/user.js');
const CategoryRouter = require('./routes/category.js');
const ProductRouter = require('./routes/product.js');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

app.use('/api/user', UserRouter);
app.use('/api/category', CategoryRouter);
app.use('/api/product', ProductRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
