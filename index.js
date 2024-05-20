require('dotenv').config();
const express = require('express');
const app = express();
const dbo = require("./Config/db");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
dbo.getDataBase();

// Importing routers
const AuthRoute = require('./routers/Auth');
const Product = require('./routers/Product');
const { findOne } = require('./Modals/User');


const Authorization = (req,res,next)=>{

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token === null || token === undefined) return res.status(400).json({message:"unAuthorized user please login...!"});

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{

        if(err)return res.status(400).json({message:"login after sometime..!"});
         
        req.user = user;

        next()

    });

}

app.use('/product',Authorization, Product);  // Assuming Product is a router, use app.use

app.use('/images', express.static('upload/images'));

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
