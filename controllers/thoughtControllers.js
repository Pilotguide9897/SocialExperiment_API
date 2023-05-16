//const { ObjectId } = require("mongoose").Types;
const { User, Thought, Reactions } = require("../models/index");

module.exports = {
  async getThoughts(req, res) {
    try {
      const result = await Thought.find({});
      res.status(200).json(result);
    } catch (err) {
      console.log("We have encountered an issue...");
      res.status(500).json({ error: "Something went wrong" });
    }
  },
  async postThought(req, res) {
    try {
    } catch (err) {}
  },
  async getThoughtById(req, res) {
    try {
    } catch (err) {}
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
