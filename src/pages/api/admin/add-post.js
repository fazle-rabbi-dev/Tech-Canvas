require("@/mongoose/db");
const { Blogs } = require("@/mongoose");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

export default async function handler(req, res) {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    try {
      const user = jwt.verify(authHeader, secretKey);
    } catch (e) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access",
    });
  }

  if (req.method === "POST") {
    let { title, content, desc, tags, thumbnail } = req.body;
    if (tags) {
      tags = tags.split(",");
    }

    try {
      const newBlog = new Blogs({
        title,
        thumbnail,
        content,
        desc,
        tags,
      });
      const ref = await newBlog.save();
    } catch (e) {
      res.status(500).json({
        message: "Something went wrong",
        cause: e.message,
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: "New blog posted! 🚀",
      success: true,
    });
    return;
  }
  res.status(405).json({ message: "Method Not Allowed", success: false });
}
