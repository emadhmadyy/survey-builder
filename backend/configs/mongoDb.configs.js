const mongoose = require("mongoose");

const connectToMongoDb = () => {
  mongoose.connect(process.env.MONGODB_URL);
  const connection = mongoose.connection;
  connection.on("error", (error) => {
    console.log("Error connection to MongoDB: ", error);
  });
  connection.once("open", () => {
    console.log("Connected to MongoDb ");
  });
};

module.exports = connectToMongoDb;
