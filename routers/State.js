const express = require("express");

const router = express.Router();
const {addState,getStates} = require("../Controllers/State/State");

router.post("/add-state",addState);
router.get("/get-state",getStates);

module.exports=router;
