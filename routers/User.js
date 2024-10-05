const express = require("express");

const router = express.Router();

const {getUserAddress} = require('../Controllers/User/User');

router.get('/get-address',getUserAddress);

module.exports = router;
