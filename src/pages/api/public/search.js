require("@/mongoose/db");
const { Blogs } = require("@/mongoose");

export default async function handler(req, res) {
  try {
    const { q } = req.query;
    const blogs = await Blogs.find({
      $or: [{ title: { $regex: new RegExp(q, "i") } }, { tags: { $in: [q] } }],
    });

    res.status(200).json({
      blogs,
    });
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong",
      cause: e.message,
    });
  }
}
