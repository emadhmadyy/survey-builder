const Survey = require("../models/survey.model");
const mongoose = require("mongoose");

const addSurvey = async (req, res) => {
  if (req.user.user_type == 0) {
    const { title, questions } = req.body;
    if (!title || !questions) {
      return res.status(400).send({ message: "all fields are required" });
    }
    try {
      const survey = new Survey({
        title,
        questions: questions.map((question) => ({
          _id: new mongoose.Types.ObjectId(),
          question_text: question.question_text,
          question_type: question.question_type,
          options: question.options || [],
          scale: question.scale || null,
        })),
      });
      await survey.save();
      return res.status(200).send({ survey });
    } catch (error) {
      return res.status(400).send({
        message: "something went wrong " + error,
      });
    }
  } else {
    return res.status(403).send("Forbidden");
  }
};

const getAllSurveys = async (req, res) => {
  if (req.user.user_type == 1) {
    try {
      const surveyData = await Survey.aggregate([
        {
          $project: {
            _id: 1,
            title: 1,
            questionsCount: { $size: "$questions" }, // Count the number of questions in the 'questions' array
          },
        },
      ]);
      res.status(200).send({ surveys: surveyData });
    } catch (error) {
      return res.status(400).send({
        message: "something went wrong " + error,
      });
    }
  } else {
    return res.status(403).send("Forbidden");
  }
};

const getSurvey = async (req, res) => {
  if (req.user.user_type == 1) {
    try {
      const id = req.params.id;
      const survey = await Survey.findOne({ _id: id });

      res.status(200).send({ survey });
    } catch (error) {
      return res.status(400).send({
        message: "something went wrong " + error,
      });
    }
  } else {
    return res.status(403).send("Forbidden");
  }
};

module.exports = { addSurvey, getAllSurveys, getSurvey };
