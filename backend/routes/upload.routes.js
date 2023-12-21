var express = require("express");
const router = express.Router();
const handleFileUploads = require("../controllers/updateProfile.controllers");

router.post("/upload", handleFileUploads);

module.exports = router;
