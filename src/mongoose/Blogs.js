const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");
const marked = require("marked");

const blogSchema = Schema({
  title: {
    type: "String",
    required: true,
  },
  thumbnail: {
    type: "String",
  },
  slug: {
    type: "String",
    required: true,
    unique: true,
  },
  desc: {
    type: "String",
    required: true,
  },
  content: {
    type: "String",
    required: true,
  },
  sanitizeHTML: {
    type: "String",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: [String],
});

blogSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
    });
  }

  if (this.content) {
    this.sanitizeHTML = marked.parse(this.content);
  }

  next();
});

module.exports = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
