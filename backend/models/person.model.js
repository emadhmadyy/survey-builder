const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  age: {
    type: Number,
    required: true,
    maxlength: 3,
  },
  nationality: {
    type: String,
    required: true,
  },
});

const Person = mongoose.model("person", personSchema);
module.exports = Person;
