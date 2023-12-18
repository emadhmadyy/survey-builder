var express = require("express");
var router = express.Router();
const Person = require("../models/person.model");

router.post("/person", async function (req, res) {
  try {
    const { name, age, nationality } = req.body;
    if (!name || !age || !nationality) {
      return res.status(400).send({
        message: "All fields are required",
      });
    }

    const newPerson = new Person({
      name: name,
      age: age,
      nationality: nationality,
    });

    // Wait for the save operation to complete
    await newPerson.save();

    res.status(200).send({ newPerson });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
