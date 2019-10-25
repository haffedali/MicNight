const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },

    date: {
        type: Date,
        default: Date.now,
        required: true
    },

    updated: {
        type:Date,
        default: Date.now
    },
    
    artists: {
        currentArtist: {
            type: String,
        },
        artistLineup: {
            type: [String]
        }
    },

    currentArtist: {
        type: String
    },

    location: {
          address: {
              streetName: {type:String, required: true},
              streetNumber: {type: Number, required: true},
              zipCode: {type: Number, required:true},
              unitId: {}
          },
          geoCode: {type:String}
    },

    isActive: {
        type: Boolean,
        default: false
    },

    schedule: {
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        }
    },

    organizers: {
        hosts: {
            type: [Schema.Types.ObjectId],
            ref: "Users"
        },
        leadHost: {
            type: Schema.Types.ObjectId ,
            ref: "Users",
        }
    }
})

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;