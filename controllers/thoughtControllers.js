//const { ObjectId } = require("mongoose").Types;
const { User, Thought, Reactions } = require("../models/index");

module.exports = {
  async getThoughts(req, res) {
    try {
      const result = await Thought.find({});
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      console.log(err, "We have encountered an issue");
      res
        .status(500)
        .json({ error: "Something went wrong fetching the thoughts" });
    }
  },
  async postThought(req, res) {
    // need to push the created thought to the associated user's thoughts array field.
    try {
      const newThought = await Thought.create(req.body);
      if (!newThought) {
        return res.status(400).json({ message: "Failed to create thought" });
      }

      const updateUser = await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { thoughts: newThought._id } },
        { new: true, runValidators: true }
      );

      if (!updateUser) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.status(200).json(newThought);
    } catch (err) {
      console.error(err);
      console.log(err, "We have encountered an unexpected issue");
      res
        .status(500)
        .json({ error: "Something went wrong posting your thought" });
    }
  },
  async getThoughtById(req, res) {
    try {
      const result = await Thought.findById(req.params.thoughtId);
      if (!result) {
        return res
          .status(404)
          .json({ error: "unable to locate a thought with that id" });
      }
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      console.log(err, "We have encountered an unexpected issue");
      res
        .status(500)
        .json({ error: "Something went wrong fetching the thought" });
    }
  },
  async updateThoughtById(req, res) {
    try {
      const thoughtToUpdate = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        { new: true }
      );
      if (!thoughtToUpdate) {
        return res
          .status(404)
          .json({ error: "Unable to locate thought with matching Id" });
      }
      res.status(200).json(thoughtToUpdate);
    } catch (err) {
      console.error(err);
      console.log(err, "We have encountered an unexpected issue");
      res
        .status(500)
        .json({ error: "Something went wrong updating the thought" });
    }
  },
  async deleteThoughtById(req, res) {
    try {
      const deleteResult = await Thought.deleteOne({
        _id: req.params.thoughtId,
      });
      if (deleteResult === 0) {
        return res
          .status(400)
          .json({ error: "No matching thought found to delete" });
      }
      res.status(200).json({ message: "Thought deleted successfully" });
    } catch (err) {
      console.error(err);
      console.log(err, "We have encountered an unexpected issue");
      res
        .status(500)
        .json({ error: "Something went wrong deleting the thought" });
    }
  },
  async createReaction(req, res) {
    try {
      const thoughtWithNewReaction = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
      );
      if (!thoughtWithNewReaction) {
        return res
          .status(404)
          .json({ error: "Unable to locate a thought with the matching Id" });
      }
      console.log(req.body);
      res.status(200).json({ message: "Reaction created successfully" });
    } catch (err) {
      console.error(err);
      console.log(err, "We have encountered an unexpected issue");
      res
        .status(500)
        .json({ error: "Something went wrong creating the reaction" });
    }
  },
  async deleteReaction(req, res) {
    try {
      const thoughtToRemove = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.body.reactionId } } },
        { new: true }
      );
      if (!thoughtToRemove) {
        return res.status(404).json({ message: "No thought with this id!" });
      }
      res.status(200).json({ message: "Reaction removed successfully" });
    } catch (err) {
      console.error(err);
      console.log(err, "We have encountered an unexpected issue");
      res
        .status(500)
        .json({ error: "Something went wrong deleting the reaction" });
    }
  },
};
