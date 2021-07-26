const { generateToken } = require("../utils/generateToken");

const loginController = (req, res, next, user, err) => {
  if (err) {
    return next({ status: 500, info: new Error("Something went wrong") });
  }

  if (!user) {
    console.log(user)
    return next({ status: 403, info: new Error("Something went wrong") });
  }

  req.login(user, { session: false }, async (error) => {

    if (error) return next(error);
    const token = generateToken(req);

    return res.json({ info: "User login", token });
  });
};

const signUpController = async (req, res, next) => {
  
  try {
    const token = generateToken(req);
    return res.status(200).json({ info: "User create", token });
    
  } catch (error) {
    
    next({ status: 403, info: new Error("Something went wrong") })
  }
};


// const githubController = (req, res, next) => {
//   try {
//     return loginController(req, res, next, req.user, null);
//   } catch (error) {
//     res.json({ err: error });
//   }
// };

// module.exports = { loginController, signUpController, githubController };

module.exports = { loginController, signUpController };

