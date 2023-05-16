//const { ObjectId } = require("mongoose").Types;
const { User, Thought, Reactions } = require("../models/index");

module.exports = {
  async getUsers(req, res) {
    try {
      const result = await User.find({});
      res.status(200).json(result);
    } catch (err) {
      console.log('We have encountered an issue...');
      res.status(500).json({ error: 'Something went wrong' });
    }
  },
  async createUser(req, res) {
    try {
    } catch (err) {}
  },
  async getUserById(req, res) {
    try {
    } catch (err) {
      // handle user not found.
    }
  },
  async updateUserById(req, res) {
    try {
    } catch (err) {}
  },
  async deleteUserById(req, res) {
    try {
    } catch (err) {
      // handle user not found.
    }
  },
  async addFriend(req, res) {
    try {
    } catch (err) {}
  },
  async removeFriend(req, res) {
    try {
    } catch (err) {
      // handle friend not found.
    }
  },
};
