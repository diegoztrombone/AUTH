const UserModel = require("../model/Users");
const { checkout } = require("../routes/auth-routes");

module.exports = (role) => async (req, res, next) => {
  const user = await UserModel.findById(req.user._id);
  const check = role.includes(user.role)
  if (check) {
    return next();
  }

  next({
    status: 403, info: new Error("Unauthorized")
  })
};


