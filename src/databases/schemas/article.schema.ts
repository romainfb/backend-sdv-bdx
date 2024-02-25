import mongoose from "mongoose";

/**
 * Article Schema
 * @type {mongoose.Schema}
 */

export const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: String,
  },
});

/**
 * Set toJSON option to transform _id into id
 */

ArticleSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
