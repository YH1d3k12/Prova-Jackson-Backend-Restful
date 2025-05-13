const express = require('express');
const cors = require('cors');
const UserRouter = require('./routes/user.js');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

app.use('/api/users', UserRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
