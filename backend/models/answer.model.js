const mongoose = require("mongoose");

const answerschema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  survey_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  answer: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

const Answer = mongoose.model("Answer", answerschema);

module.exports = Answer;
