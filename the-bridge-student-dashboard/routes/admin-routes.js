const router = require("express").Router();
const { changeRole, getUsers, checkAdmin, deleteUser, updateUser } = require("../controllers/admin.controller")
const checkRole = require("../utils/checkRole")
const passport = require("passport");
const authController = require("../controllers/auth.controller");


router.get("/", checkRole(["ADMIN", "EDITOR"]),checkAdmin)
router.get("/users", checkRole(["ADMIN", "EDITOR"]), getUsers)

router.put("/role", checkRole(["ADMIN"]), changeRole)
router.put("/update", checkRole(["ADMIN", "EDITOR"]), updateUser)

router.delete("/delete", checkRole(["ADMIN", "EDITOR"]), deleteUser)

router.post(
    "/newuser",
    checkRole(["ADMIN", "EDITOR"]),
    passport.authenticate("signup", { session: false }),
    authController.signUpController,
);
module.exports = router