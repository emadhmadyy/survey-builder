const authMiddleware = (req, res, next) => {
  console.log("this is the middle ware");
  next();
};

module.exports = authMiddleware;
