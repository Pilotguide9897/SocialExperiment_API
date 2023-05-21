const router = require("express").Router();
    
const { 
    thoughtControllers: {
    getThoughts, 
    postThought, 
    getThoughtById, 
    updateThoughtById, 
    deleteThoughtById, 
    createReaction, 
    deleteReaction
    }
} = require("../../controllers");

// /api/thoughts
router.route('/').get(getThoughts).post(postThought); // working.

// api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById).delete(deleteThoughtById); 

// api/thoughts:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;