//const { ObjectId } = require("mongoose").Types;
const { User, Thought, Reactions } = require("../models/index");

module.exports = {
  async getThoughts(req, res) {
    try {
      const result = await Thought.find({});
      res.status(200).json(result);
    } catch (err) {
      console.log("We have encountered an issue");
      res.status(500).json({ error: "Something went wrong fetching the thoughts" });
    }
  },
  async postThought(req, res) {
    try {
      const post = await Thought.create(req.body.params);
      res.status(200).json(post);
    } catch (err) {
      console.log("We have encountered an unexpected issue");
      res.status(500).json({ error: "Something went wrong postinng your thought" });
    }
    },
  async getThoughtById(req, res) {
    try {
      const result = await Thought.findById(req.params.thoughtId);
      if (!result) {
        res.status(404).json({ error: "unable to locate a thought with that id" });
      }
      res.status(200).json(result);
    } catch (err) {
      console.log("We have encountered an unexpected issue");
      res.status(500).json({ error: "Something went wrong fetching the thought" });
    }
  },
  async updateThoughtById(req, res) {
    try {
    } catch (err) {}
  },
  async deleteThoughtById(req, res) {
    try {
    } catch (err) {}
  },
  async createReaction(req, res) {
    try {
    } catch (err) {}
  },
  async deleteReaction(req, res) {
    try {
    } catch (err) {}
  },
};
