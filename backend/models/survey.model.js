const mongoose = require("mongoose");
const Question = require("./question.model.js");

const surveyschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
  },
  questions: {
    type: [],
    required: true,
  },
});

const Survey = mongoose.model("Survey", surveyschema);
