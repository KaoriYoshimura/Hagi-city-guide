const express = require('express');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => res.send('API running'));

// Parse application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
    extended: false
}));
// Parse application/json type post data
app.use(bodyParser.json());

// Connect Database
connectDB();

app.use(fileUpload());

// Define routes
app.use('/api/uploadFile', require('./routes/api/uploadFile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.MONGODB_PORT || 5000;

app.listen(PORT, () => console.log(`Server listning on Port No ${PORT}`));