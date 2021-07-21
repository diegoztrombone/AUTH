const mongoose = require("mongoose");

const Schema = mongoose.Schema

const PostSchema = new Schema({
    content: {
      type: String,
      required: true,
      unique: true,
    },
    owner: { type: Schema.Types.ObjectId, ref: "mongousers" },
  });


const PostModel = mongoose.model("posts", PostSchema)

module.exports = PostModel