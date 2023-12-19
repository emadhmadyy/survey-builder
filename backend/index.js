var express = require("express");
var app = express();
app.use(express.json());
const connectToMongoDb = require("./configs/mongoDb.configs.js");
require("dotenv").config();

app.get("/", function (req, res) {
  res.send("this is the main route");
});

const userRoutes = require("./routes/user.routes.js");
app.use("/user", userRoutes);

// const authMiddleware = require("./middleware/auth.middleware.js");
// const person = require("./routes/person.routes.js");
// app.use("/add", person);

app.listen(8000, () => console.log("listening on port " + 8000));

connectToMongoDb();
