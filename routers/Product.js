const express = require('express');
const router = express.Router();
const {addproduct,uploadImage,products} = require('../Controllers/Product/Product');

router.post('/addproduct',addproduct);
router.get('/getproducts',products);

module.exports = router;