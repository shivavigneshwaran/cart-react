const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    maxlength: 2,
  },
  country:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
  },
  deletedAt:{
  	type:Date,
  	default:null
  }
}, { timestamps: true });  // Corrected 'timestamps'

const State = mongoose.model("State", StateSchema);

module.exports = State;
