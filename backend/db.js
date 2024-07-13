const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/paytm');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
         
    },
    firstName: {
        type: String,  
        required: true,
        trim: true, 
    },
    lastName: {
        type: String,  
        required: true,
        trim: true, 
    },
    password: {
        type: String,  
        required: true,
        trim: true,
    },
});

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }

})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports ={
    User,
    Account
};