const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    content: [{
        type: String
    }]

}, { retainKeyOrder: true });


const CourseModel = mongoose.model("CoursesCollection", CourseSchema);

module.exports = CourseModel;