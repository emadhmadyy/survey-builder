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
  answers: [
    {
      question_id: { type: Number, required: true },
      question_text: { type: String, required: true },
      question_type: { type: String, required: true },
      options: { type: [String] },
      scale: { type: Number },
      answer: { type: mongoose.Schema.Types.Mixed, required: true },
    },
  ],
});

const Answer = mongoose.model("Answer", answerschema);

module.exports = Answer;
