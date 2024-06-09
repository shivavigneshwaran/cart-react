require('dotenv').config();
const express = require('express');
const path = require('path');
const dbo = require("./Config/db");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require("multer");
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

// Define allowed origins
const allowedOrigins = [
    'https://shopper-004m.onrender.com',
    'http://localhost:3000' // If you're also running a frontend locally
];

// Configure CORS options
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true // If you need to allow cookies or authorization headers
};

// Use the CORS middleware
app.use(cors(corsOptions));
app.use(express.json());

// Database connection
dbo.getDataBase();

// Importing routers
const AuthRoute = require('./routers/Auth');
const Product = require('./routers/Product');

// Authorization Middleware
const Authorization = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(400).json({ message: "Unauthorized user, please login...!" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(400).json({ message: "Login after some time..!" });

        req.user = user;
        next();
    });
}

// API routes
app.use('/api/auth', AuthRoute);
app.use('/api/product', Product);

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });
app.use('/images', express.static('upload/images'));

// Define the upload route directly in the app
app.post('/api/upload', upload.single('product'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: 'No file uploaded' });
    }
    res.json({
        success: 1,
        imageUrl: `http://localhost:${PORT}/images/${req.file.filename}`
    });
});

// Creating Endpoint for Registering the User
app.use('/api/auth', AuthRoute);

// Proxy frontend requests
const frontendUrl = 'https://shopper-004m.onrender.com'; // URL where your frontend is hosted

// Use http-proxy-middleware to forward non-API requests to the frontend
app.use('/*', createProxyMiddleware({
    target: frontendUrl,
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Remove /api prefix when forwarding to frontend server
    },
    onProxyReq: (proxyReq, req, res) => {
        // You can add additional headers here if necessary
    }
}));

const PORT = process.env.PORT || 4000;

// Starting the server
app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server Running on Port " + PORT);
    } else {
        console.log("Error: " + error);
    }
});
