const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/socialNetworkDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongo"))
  .catch((e) => console.error(e));

// Export connection
module.exports = mongoose.connection;
