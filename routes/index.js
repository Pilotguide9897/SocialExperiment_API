const router = require("express").Router();
const userRoutes = require("./api/user");
const thoughtsRoutes = require("./api/thoughts");

router.use("/user", userRoutes);
router.use("/thoughts", thoughtsRoutes);

module.exports = router;
