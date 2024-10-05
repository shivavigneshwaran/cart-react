const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    maxlength: 3,
  },
  states: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State',
  }],
  deletedAt:{
  	type:Date,
  	default:null
  }
}, { timestamps: true });  // Corrected 'timestamps'

const Country = mongoose.model("Country", CountrySchema);

module.exports = Country;
