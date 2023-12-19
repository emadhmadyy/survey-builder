const mongoose = require("mongoose");

const surveyschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
  },
  questions: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
      question_text: { type: String, required: true },
      question_type: { type: String, required: true },
      options: { type: [String] },
      scale: { type: Number },
    },
  ],
});

const Survey = mongoose.model("Survey", surveyschema);

module.exports = Survey;
