const dotenv = require("dotenv").config();

module.exports = {
    PORT: 3000,
    MONGO_URI: "mongodb://127.0.0.1:27017/TheBridgeDB",
    SECRET_TOKEN: process.env.SECRET_TOKEN,
    EXPIRE_TIME: "3600s"
}