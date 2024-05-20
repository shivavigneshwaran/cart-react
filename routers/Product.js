const express = require('express');
const router = express.Router();
const {addproduct,uploadImage} = require('../Controllers/Product/Product');
const multer = require("multer");
const path = require("path");
//Image Storage Engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});
const upload = multer({storage:storage});
router.post('/addproduct',addproduct);
router.post('/upload',upload.single('product'),uploadImage);

module.exports = router;