const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const loginController = (req, res, next, user, err) => {
  if (err || !user) {
    const error = new Error("An error occurred.");

    return next(error);
  }

  req.login(user, { session: false }, async (error) => {
    if (error) return next(error);

    const body = { _id: user._id, email: user.email };
    const token = jwt.sign({ user: body }, process.env.SECRET_TOKEN, {
      expiresIn: "30000s",
    });

    return res.json({ token });
  });
};

module.exports = { loginController };
