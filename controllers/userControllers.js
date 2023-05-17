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
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: 'Something went wrong creating the new user' });
    }
  },
  async getUserById(req, res) {
    try {
        const seekUserById = await User.findById(req.params.userId);
        if (!seekUserById) {
            return res.status(404).json({ error: 'Unable to locate user with matching Id' });
        }
        res.status(200).json(seekUserById);
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong fetching your result' });
    }
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
