const mongoose = require ('mongoose');

const thoughtsSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now(), // I will need to make sure that this is formatted correctly.
        get: function (value) 
            mmddyyyy: function (value) {
            const month = value.getMonth() + 1;
            const day = value.getDate();
            const year = value.getFullYear();
            return `${month}/${day}/${year}`;
      },
        }
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
    {
        virtuals: {
            reactionCount: {
                get () {
                    this.reactions.length
                }
            }
        }
    }

})

const Thoughts = mongoose.model('Thoughts', thoughtsSchema);

module.exports = 