const router = require("express").Router();

const {
    userControllers: {
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend
    }
    
} = require ('../../controllers')

// /api/users
router.route('/').get(getUsers).post(createUser); // working.

// /api/users/:id
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById); // working.

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;