import mongoose from "mongoose";

/**
 * Comment Schema
 * @type {mongoose.Schema}
 */

export const CommentSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  articleID: {
    type: String,
    required: true,
  },
  commentContent: {
    type: String,
    required: true,
  },
});

/**
 * Set toJSON option to transform _id into id
 */

CommentSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
