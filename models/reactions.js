const { default: mongoose } = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
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
    default: Date.now,
    get: function (value) {
      const month = value.getMonth() + 1;
      const day = value.getDate();
      const year = value.getFullYear();
      const hours = value.getHours();
      const minutes = ("0" + value.getMinutes()).slice(-2);
      return `${month}/${day}/${year} at ${hours}:${minutes}`;
    },
  },
});

module.exports = reactionSchema;
