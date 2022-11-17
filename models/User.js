//User schema vitore za za takbe name, email, password and profile

const { Schema, model } = require('mongoose')


const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        maxlength: 15
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
}, {
    timestamps: true
})

const User = model('User', userSchema)
module.exports = User