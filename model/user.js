var mongoose = require('mongoose');


var newUser = mongoose.model('UserNew', {
    firstName: {
        type: String,
        minlength: 1,
        trim: true
    },
    lastName: {
        type: String,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {newUser};