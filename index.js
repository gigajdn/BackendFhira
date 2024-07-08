const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
require('dotenv').config(); 

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());

// Define Routes
app.use('/api/admins', require('./routes/adminRoutes'));
app.use('/api/carts', require('./routes/cartRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/order-items', require('./routes/orderItemRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/product-images', require('./routes/productImageRoutes'));
app.use('/api/product-reviews', require('./routes/productReviewRoutes'));
app.use('/api/reports', require('./routes/reportRoutes'));
app.use('/api/tracking', require('./routes/trackingRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/user-notifications', require('./routes/userNotificationRoutes'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
