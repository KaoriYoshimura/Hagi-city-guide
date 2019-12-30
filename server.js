const express = require('express');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();

// Parse application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
    extended: false
}));
// Parse application/json type post data. bodyParser can be replaced with express today.
app.use(bodyParser.json());

// Connect Database
connectDB();

app.use(fileUpload());

// Define routes
app.use('/api/uploadFile', require('./routes/api/uploadFile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.MONGODB_PORT || 5000;

app.listen(PORT, () => console.log(`Server listning on Port No ${PORT}`));