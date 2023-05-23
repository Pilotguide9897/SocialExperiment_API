const mongoose = require("mongoose");
const reactionSchema = require("./reactions");

const thoughtsSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
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
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
    id: false,
  }
);

thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thoughts = mongoose.model("Thoughts", thoughtsSchema);

module.exports = Thoughts;
