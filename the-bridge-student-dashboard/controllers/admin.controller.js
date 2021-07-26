const Usermodel = require("../model/Users")

const checkAdmin = async (req, res, next) => {
    const result = await Usermodel.findById(req.user._id)
    res.status(200).json({
        success: true,
        info: `User ${req.user.email} successfully logged as ${result.role}`
    })
}
const changeRole = async (req, res, next) => {
    const { email: data1, role: data2 } = req.body
    const result = await Usermodel.findOneAndUpdate({ email: data1 }, { role: data2 }, { new: true })
    res.status(200).json({
        success: true,
        info: `${result.email} Role has uptade to ${result.role}`
    })
}

const getUsers = async (req, res, next) => {
    const users = await Usermodel.find({}, { "password": 0 }).populate('courses')
    res.status(200).json({
        success: true,
        info: users,
    })
}

const deleteUser = async (req, res, next) => {
    const { email: data } = req.body
    const users = await Usermodel.findOneAndDelete({ email: data })
    if (!users) return next({ status: 404, info: new Error("User not found") })
    res.status(200).json({
        success: true,
        info: `${users.email} has been removed successfully`
    })
}

const updateUser = async (req, res, next) => {
    const { oldemail, newemail } = req.body
    const result = await Usermodel.findOneAndUpdate({ email: oldemail }, { email: newemail }, { new: true })
    res.status(200).json({
        success: true,
        info: `${oldemail} email has been update to ${result.email}`
    })
}



module.exports = { changeRole, getUsers, checkAdmin, deleteUser, updateUser }