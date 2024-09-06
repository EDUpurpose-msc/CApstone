const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:String,
    email:{ type: String, unique: true },
    password:String,
    confirmPassword:String
})

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;