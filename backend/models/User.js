const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true
    },
    username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},

    name: {
        firstName: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        }
    },

    socialLinks: {
        google: {
            type: Boolean
        },
        instagram:{
            type: Boolean
        },
        facebook:{
            type:Boolean
        },
        twitter:{
            type:Boolean
        }
    },

    Organizes: {
        type: Schema.Types.ObjectId,
        ref: "Events"
    }
})



module.exports = mongoose.model('User', UserSchema);