const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required:true,
        maxlength:10,
        default: ""
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object,
        default: {}
    },
    addressId:[{type:mongoose.Schema.Types.ObjectId,ref:"Address"}]
},{ timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;
