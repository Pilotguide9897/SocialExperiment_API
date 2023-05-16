const mongoose = require('mongoose');
const reactionSchema = require('../models/reactions');

const thoughtsSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function (value) {
            const month = value.getMonth() + 1;
            const day = value.getDate();
            const year = value.getFullYear();
            return `${month}/${day}/${year}`;
        }
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
}, {
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
    id: false
});

thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thoughts = mongoose.model('Thoughts', thoughtsSchema);