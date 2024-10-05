const express = require('express');
const router = express.Router();
const {addproduct,uploadImage,products,getCarNames} = require('../Controllers/Product/Product');

router.post('/addproduct',addproduct);
router.get('/getproducts',products);
router.post('/getcars',getCarNames);

module.exports = router;