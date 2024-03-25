const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'pls add a name'],
        unique: true,
       
    },
    password: {
        type: String,
        required: [true, 'pls add a password'],
        unique:true
    },
    email: {    
        type: String,
         required: [true, 'pls add a email'],
        unique:true
    }

}, {
    timestamps: true,
});

//hashing password 
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);