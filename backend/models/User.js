
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = Schema({

    userId:{type:String,requied:true},
    userName :{ type: String },
    email:{type:String}
})


module.exports = mongoose.model('User',UserSchema);
