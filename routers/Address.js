const express = require('express');
const router = express.Router();
const {addAddress,getAddress,editAddress} = require('../Controllers/Address/address');

router.post('/add-address',addAddress);
router.get('/get-address',getAddress);
router.put('/update-address/:addressId',editAddress);
module.exports = router;