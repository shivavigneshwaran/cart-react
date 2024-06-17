require('dotenv').config();
const express = require('express');
const path = require('path');
const dbo = require("./Config/db");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require("multer");
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Middleware

// Define allowed origins
const allowedOrigins = [
    'https://shopper-004m.onrender.com',
    'http://localhost:3000' // If you're also running a frontend locally
];

// Configure CORS options
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl requests)
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
};

app.use('/product', Product);  // Assuming Product is a router, use app.use

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
app.post('/upload', upload.single('product'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: 'No file uploaded' });
  }
  res.json({
    success: 1,
    imageUrl: `${req.file.filename}`
  });
});

// Creating Endpoint for Registering the User
app.use('/auth', AuthRoute);  // Assuming AuthRoute is a router

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, 'frontend_build')));

// Fallback for serving index.html on unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend_build', 'index.html'));
});

const PORT = process.env.PORT || 4000;
// Starting the server
app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server Running on Port " + PORT);
  } else {
    console.log("Error: " + error);
  }
});
