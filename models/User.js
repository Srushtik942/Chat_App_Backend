const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require:true,
        unique: true
    },
    password :{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

// method for compare password
userSchema.methods.comparePassword = async function (password){
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User",userSchema);

module.exports = User