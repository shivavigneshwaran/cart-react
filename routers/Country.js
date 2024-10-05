const express = require('express');
const router = express.Router();
const { AddCountry,getCountrys} = require('../Controllers/Country/Country');

// Define POST route to add a country
router.post('/add-country', AddCountry);
router.get('/get-countrys',getCountrys)

module.exports = router;
