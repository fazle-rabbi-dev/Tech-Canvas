require("@/mongoose/db");
const { Blogs } = require("@/mongoose");

export default async function handler(req, res) {
  try {
    const blogs = await Blogs.find();
    res.status(200).json({
      blogsData: {
        data: blogs,
      },
    });
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong",
      cause: e.message,
    });
  }
}
