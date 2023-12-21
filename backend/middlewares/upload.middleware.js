const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadMiddleware = (req, res, next) => {
  upload.single("profilePicture")(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res
        .status(400)
        .json({ success: false, message: "File upload error" });
    } else if (err) {
      return res.status(500).json({ success: false, message: "Server error" });
    }
    next();
  });
};

module.exports = uploadMiddleware;
