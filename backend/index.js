var express = require("express");
var app = express();
app.use(express.json());
const connectToMongoDb = require("./configs/mongoDb.configs.js");
require("dotenv").config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // or set it to the specific origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(200); // Respond to preflight requests with HTTP 200 OK
  } else {
    next();
  }
});

app.get("/", function (req, res) {
  res.send("this is the main route");
});

const userRoutes = require("./routes/user.routes.js");
app.use("/user", userRoutes);

const surveyRoutes = require("./routes/survey.routes.js");
const authMiddleware = require("./middlewares/auth.middleware.js");
app.use("/survey", authMiddleware, surveyRoutes);

// const person = require("./routes/person.routes.js");
// app.use("/add", person);

app.listen(8000, () => console.log("listening on port " + 8000));

connectToMongoDb();
