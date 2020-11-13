const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    mobile: {
        type: String,
        required: false
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    boi: {
        type: String,
        max: 500
    },
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = profile = mongoose.model('profile', ProfileSchema);

