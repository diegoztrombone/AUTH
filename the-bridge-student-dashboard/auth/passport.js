const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const UserModel = require("../model/Users");
const JWTstrategy = require("passport-jwt").Strategy;
const dotenv = require("dotenv").config();
const debug = require("debug")("app:auth");
const GitHubStrategy = require("passport-github2").Strategy;
const passportController = require("../controllers/passport.controller");
const { authConfig, JWTconfig } = require("../config/auth-config");
// const { authConfig, JWTconfig, githubConfig } = require("../config/auth-config");


passport.serializeUser(function (user, done) {
    done(null, user);
});


passport.deserializeUser(function (obj, done) {
    done(null, obj);
});


passport.use("signup", new localStrategy(authConfig, passportController.passportSignupController));


passport.use("login", new localStrategy(authConfig, passportController.passportLoginController));


passport.use(new JWTstrategy(JWTconfig, passportController.passportJWTcontroller));


// passport.use(new GitHubStrategy(githubConfig, passportController.passportGithubController));
