const express = require("express");
const checkRoles = require("../middlewares/checkRoles");
const PostModel = require("../model/Post");
const router = express.Router();
const debug = require("debug")("app:routes:secure-route");


router.post("/get-all", async (req, res, next) => {


    const post = await PostModel.find({ content, owner })
    res.status(200).json({
        info: "OK"
    })
});
router.post("/newpost", async (req, res, next) => {
    const { content } = req.body
    const owner = req.user._id
    console.log(content, owner)

    // const post = await PostModel.create({ content, owner })
    res.status(200).json({
        info: "OK"
    })
});




module.exports = router;