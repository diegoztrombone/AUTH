const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    githubID: {
        type: String,
    },

    courses: [{
        type: Schema.Types.ObjectId, ref: 'CoursesCollection'
    }],
    role: {
        type: String,
        enum: ["USER", "EDITOR", "ADMIN"],
        default: "USER",
    },

}, { retainKeyOrder: true });

UserSchema.pre("save", async function (next) {
    const user = this;
    if (user.githubID) {
        next();
    }
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
});

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);

    return compare;
};

const UserModel = mongoose.model("TheBridge_Users", UserSchema);

module.exports = UserModel;