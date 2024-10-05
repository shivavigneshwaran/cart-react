const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required:true
    },
    cityTown: {
        type: String,
        required: true
    },
    stateId:{type:mongoose.Types.ObjectId,ref:"State",required:true},
    countryId:{type:mongoose.Types.ObjectId,ref:"Country",required:true},
    userId:{type:mongoose.Types.ObjectId,ref:"User",required:true},

},{ timestamps: true });

const User = mongoose.model('Address', AddressSchema);
module.exports = User;
