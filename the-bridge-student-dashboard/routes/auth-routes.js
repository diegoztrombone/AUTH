const router = require("express").Router();
const passport = require("passport");

const authController = require("../controllers/auth.controller");


router.post("/login", async (req, res, next) => {
    passport.authenticate("login", async (err, user) => {
        authController.loginController(req, res, next, user, err);
    })(req, res, next);
});

module.exports = router