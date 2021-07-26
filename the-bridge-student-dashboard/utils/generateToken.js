const jwt = require("jsonwebtoken");

const { SECRET_TOKEN, EXPIRE_TIME } = require("../constants");


const generateToken = (req) => {
  const body = { _id: req.user._id, email: req.user.email };

  const token = jwt.sign({ user: body }, SECRET_TOKEN, {
    expiresIn: EXPIRE_TIME,
  });

  return token;
};

module.exports = { generateToken };
