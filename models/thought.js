const mongoose = require ('mongoose');

const thoughtsSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    }
    createdAt: {

    },
    username: {
        type: String,
    },
    reactions: {

    },
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