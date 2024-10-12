const express = require('express');
const router = express.Router();
const {addAddress,getAddress} = require('../Controllers/Address/address');

router.post('/add-address',addAddress);
router.get('/get-address',getAddress);
module.exports = router;