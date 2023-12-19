const mongoose = require("mongoose");

const questionschema = new mongoose.Schema({
  questionText: { type: String, required: true },
  questionType: { type: String, required: true },
  options: { type: [String] },
  scale: { type: Number },
});

const Question = mongoose.model("Question", questionschema);

module.exports = Question;
