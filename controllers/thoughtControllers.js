//const { ObjectId } = require("mongoose").Types;
const { User, Thought, Reactions } = require("../models/index");

module.exports = {
  async getThoughts(req, res) {
    try {
      const result = await Thought.find({});
      res.status(200).json(result);
    } catch (err) {
      console.log(err, "We have encountered an issue");
      res.status(500).json({ error: "Something went wrong fetching the thoughts" });
    }
  },
  async postThought(req, res) {
    try {
      const post = await Thought.create(req.body);
      res.status(200).json(post);
    } catch (err) {
      console.log( err, "We have encountered an unexpected issue");
      res.status(500).json({ error: "Something went wrong postinng your thought" });
    }
    },
  async getThoughtById(req, res) {
    try {
      const result = await Thought.findById(req.params.thoughtId);
      if (!result) {
        return res.status(404).json({ error: "unable to locate a thought with that id" });
      }
      res.status(200).json(result);
    } catch (err) {
      console.log(err, "We have encountered an unexpected issue");
      res.status(500).json({ error: "Something went wrong fetching the thought" });
    }
  },
  async updateThoughtById(req, res) {
    try {
      const thoughtToUpdate = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new:true });
      if (!thoughtToUpdate) {
        return res
          .status(404)
          .json({ error: "Unable to locate thought with matching Id" });
      }
      res.status(200).json(thoughtToUpdate);
    } catch (err) {
      console.log(err, "We have encountered an unexpected issue");
      res.status(500).json({ error: "Something went wrong updating the thought" });
    }
  },
  async deleteThoughtById(req, res) {
    try {
      const deleteResult = await Thought.deleteOne({ _id: req.params.thoughtId });
      if (deleteResult === 0) {
        return res.status(400).json({ error: 'No matching thought found to delete'});
      }
      res.status(200).json({ message: 'Thought deleted successfully' });
    } catch (err) {
      console.log(err, "We have encountered an unexpected issue");
      res.status(500).json({ error: "Something went wrong deleting the thought" });
    }
  },
  async createReaction(req, res) {
    try {
      const thoughtWithNewReaction = await Thought.findById(req.params.thoughtId);
      if (!thoughtWithNewReaction) {
        return res.status(404).json({ error: 'Unable to locate a thought with the matching Id' });
      }
      thoughtWithNewReaction.reactions.push(req.body);
      await thoughtWithNewReaction.save();
    } catch (err) {
      console.log(err, "We have encountered an unexpected issue");
      res.status(500).json({ error: "Something went wrong creating the reaction" });
    }
  },
  async deleteReaction(req, res) { // How do I target a certain reaction?
    try {

    } catch (err) {
      console.log(err, "We have encountered an unexpected issue");
      res.status(500).json({ error: "Something went wrong deleting the reaction" });
    }
  },
};
