const User = require("../models/user.model");
const handleFileUpload = async (req, res) => {
  try {
    const userId = req.user._id;
    const profilePictureUrl = `http://localhost:8000/images/${req.file.filename}`;

    await User.findByIdAndUpdate(userId, { profile_url: profilePictureUrl });

    res.json({
      success: true,
      message: "File uploaded successfully",
      path: profilePictureUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = handleFileUpload;
