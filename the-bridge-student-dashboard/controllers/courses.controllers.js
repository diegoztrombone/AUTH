const CourseModel = require("../model/CoursesModel")
const UserModel = require("../model/Users")

const addCourse = async (req, res, next) => {
    try {
        const { name, content } = req.body
        const course = await CourseModel.create({ name, content })
        res.status(200).json({
            status: true,
            info: course
        })

    } catch (error) {
        next({ status: 500, info: new Error("Can't create a user") })
    }
}

const addCourseToUser = async (req, res, next) => {
    const { email: useremail, data } = req.body
    const dataArr = data.split(' ')
    const user = await UserModel.findOne({ email: useremail })
    if (!user) {
        next({ status: 500, info: new Error("User not found") })
    }
    const result = await UserModel.findByIdAndUpdate(user.id, {courses: dataArr}, { new: true }).populate()

    res.status(200).json({ 
        status: true,
        data: result,
    })


}

const getUserCourses = async (req, res, next) => {
    const result = await UserModel.findById(req.user._id, { "role": 0, "password": 0, "_id": 0, "__v": 0 }).populate("courses")
    if (!result) {
        next({ status: 500, info: new Error("User not found") })
    }
    res.status(200).json({ 
        status: true,
        data: result,
    })


}
module.exports = { addCourse, addCourseToUser, getUserCourses }