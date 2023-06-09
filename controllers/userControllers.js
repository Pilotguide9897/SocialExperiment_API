//const { ObjectId } = require("mongoose").Types;
const { User, Thought, Reactions } = require("../models/index");

module.exports = {
  async getUsers(req, res) {
    try {
      const result = await User.find({});
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  },
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
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
        console.error(err);
        res.status(500).json({ error: 'Something went wrong fetching your result' });
    }
  },
 async updateUserById(req, res) {
  try {
    const userToUpdate = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!userToUpdate) {
        return res.status(404).json({ error: 'Unable to locate user with matching Id' });
    } 
    res.status(200).json(userToUpdate);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong updating the user' });
  }
},
async deleteUserById(req, res) {
  try {
    const deleteResult = await User.deleteOne({ _id: req.params.userId });
    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ error: 'No matching user found to delete' });
    }
    res.status(200).json({ message: 'User successfully deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong deleting the user' });
  }
},
  async addFriend(req, res) {
    try {
      const userWithNewFriend = await User.findById(req.params.userId);
      if (!userWithNewFriend) {
        console.error(err);
        return res.status(404).json({ error: 'Unable to locate a user with the matching Id' });
      }
      const newFriend = await User.findById(req.params.friendId);
      if (!newFriend) {
        return res.status(404).json({ error: 'Unable to locate a friend with the matching Id' });
      }

      userWithNewFriend.friends.push(newFriend._id);
      await userWithNewFriend.save();

      res.status(200).json({ message: 'Friend added successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong when adding the new friend' });
    }
},
  async removeFriend(req, res) {
  try {
    const userToRemoveFriend = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    if (!userToRemoveFriend) {
      return res.status(404).json({ error: 'Unable to locate a user with the matching Id' });
    }
    res.status(200).json(userToRemoveFriend);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'There was a problem removing this friend' });
  }
}
};
