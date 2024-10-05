const express = require('express');
const router = express.Router();
const {addAddress} = require('../Controllers/Address/Address');

router.post('/add-address',addAddress);
module.exports = router;