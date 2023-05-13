const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema ({
    username: { 
        type: String,
        unique: true,
        required: true,
        trim: true
     },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please provide a valid email']
    },
    // come back to
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref:'thought'
    }],
    friends:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }, {
    virtuals: {
        friendCount: {
            get () {
                return this.friends.length;
            }
        }
    }
})

const User = mongoose.model('User', userSchema);