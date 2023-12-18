const mongoose = require("mongoose");

const connectToMongoDb = () => {
  mongoose.connect("mongodb://localhost:27017/todo_db");
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Error connection to MongoDB: ", error);
  });
  connection.once("open", () => {
    console.log("Connected to MongoDb ");
  });
};

module.exports = connectToMongoDb;
