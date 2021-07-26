const express = require("express");
const passport = require("passport");


const dotenv = require("dotenv").config();

const router = express.Router();

router.use("/", require('./auth-routes'));
router.use("/admin", passport.authenticate("jwt"), require("./admin-routes"))
router.use("/courses", passport.authenticate("jwt"), require("./courses-routes"))

module.exports = router