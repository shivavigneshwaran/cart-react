const express = require("express");

const router = express.Router();
const {addState} = require("../Controllers/State/State");

router.post("/add-state",addState);

module.exports=router;