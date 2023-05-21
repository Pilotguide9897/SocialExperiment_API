const { default: mongoose } = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(), // I will need to make sure that this is formatted correctly.
    get: function (value) {
      const month = value.getMonth() + 1;
      const day = value.getDate();
      const year = value.getFullYear();
      return `${month}/${day}/${year}`;
    },
  },
});

  module.exports = { reactionSchema };