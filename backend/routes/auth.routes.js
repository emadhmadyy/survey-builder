var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  console.log("this is the log from the route");
  res.send("i am sending from the auth route");
});

// dynamic route 1 layer
router.get("/:id", function (req, res) {
  res.send("this is a dynamic route with 1 layer, " + req.params.id);
});

router.get("/:id/:name", function (req, res) {
  res.send(
    "this is a dynamic route with two layers, " +
      req.params.id +
      " " +
      req.params.name
  );
});

// other routes that are not defined can be handled using *
router.get("*", function (req, res) {
  res.send(
    "these are routers that are not defined and should be included after all other valid routes"
  );
});

module.exports = router;
