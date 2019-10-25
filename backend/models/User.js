const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    name: {
        firstName: {
            type: String,
            trim: true,
            required: true,
        },
        lastName: {
            type: String,
            trim: true
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