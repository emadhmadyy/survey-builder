var express = require("express");
var router = express.Router();
const {
  addSurvey,
  getAllSurveys,
  getSurvey,
} = require("../controllers/survey.controllers");

router.post("/", addSurvey);
router.get("/", getAllSurveys);
router.get("/:id", getSurvey);

module.exports = router;
