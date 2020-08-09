const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({ 
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    keywords: {
        type: [String]
    },
    status: {
        type: String,
        default: 'active',
        enum: ["active", "hold", "closed"]
    },
    description: {
        type: String,
    },
    phone: {
        type: String,
    },
    website: {
        type: String,
    },
    email: {
        type: String
    },
    startOn: {
        type: Date,
        required: true
    },
    endOn: {
        type: Date,
        required: true
    },
    bookinkLastDate: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    location: {
        country: {
            type: String,
            default: "Bangladesh"
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
        },
        zipCode: {
            type: String,
            required: true
        }
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
        instagram: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = destination = mongoose.model('Destination', DestinationSchema);
