var express = require("express");
var app = express();
const connectToMongoDb = require("./configs/mongoDb.configs.js");
app.use(express.json());

app.get("/", function (req, res) {
  res.send("this is the main route");
});

const auth = require("./routes/auth.routes.js");
const authMiddleware = require("./middlewares/auth.middlewares.js");
app.use("/auth", authMiddleware, auth);

const person = require("./routes/person.routes.js");
app.use("/add", person);

app.listen(8000, () => console.log("listening on port " + 8000));

connectToMongoDb();
