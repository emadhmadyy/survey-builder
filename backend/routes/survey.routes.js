var express = require("express");
var router = express.Router();
const { addSurvey } = require("../controllers/survey.controllers");

router.post("/", addSurvey);

module.exports = router;
