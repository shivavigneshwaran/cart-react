require('dotenv').config();
const express = require('express');
const app = express();
const dbo = require("./Config/db");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const router = express.Router();


// Middleware

app.use(express.json());
app.use(cors());

// Database connection
dbo.getDataBase();

// Importing routers
const AuthRoute = require('./routers/Auth');
const Product = require('./routers/Product');
const { findOne } = require('./Modals/User');

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

app.use('/product', Product);  // Assuming Product is a router, use app.use

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

//Image Storage Engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});
const upload = multer({storage:storage});
app.use('/images', express.static('upload/images'));
router.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        imageUrl:`http://localhost:${port}/images/${req.file.filename}`
    })
});

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

const PORT = process.env.PORT || 4000;
// Starting the server
app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server Running on Port " + PORT);
    } else {
        console.log("Error: " + error);
    }
});
