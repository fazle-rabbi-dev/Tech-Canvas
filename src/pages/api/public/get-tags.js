require("@/mongoose/db");
const { Blogs } = require("@/mongoose");

export default async function handler(req, res) {
  try {
    const blogs = await Blogs.find();

    let tags = [];
    blogs.forEach((blog) => {
      blog.tags.forEach((tag) => {
        tags.push(tag);
      });
    });
    tags = new Set(tags);
    tags = Array.from(tags);

    res.status(200).json({
      tags,
    });
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong",
      cause: e.message,
    });
  }
}
