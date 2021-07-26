const router = require("express").Router();
const checkRole = require("../utils/checkRole")
const { addCourse, addCourseToUser, getUserCourses } = require("../controllers/courses.controllers")

router.post('/new', checkRole(["ADMIN"]), addCourse)
router.post('/add', checkRole(["ADMIN", "EDITOR"]), addCourseToUser)
router.get('/get', getUserCourses)

module.exports = router