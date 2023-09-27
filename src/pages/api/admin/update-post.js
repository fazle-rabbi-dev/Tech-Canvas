require("@/mongoose/db");
const { Blogs } = require("@/mongoose");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
const marked = require("marked");

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
    let { title, tags, thumbnail, desc, date, content } = req.body;
    const { slug } = req.query;

    if (!slug) {
      return res.status(402).json({
        message: "Bad request",
      });
    }

    try {
      const newObj = {
        title,
        tags: tags.split(","),
        thumbnail,
        desc,
        date,
        content,
        sanitizeHTML: marked.parse(content)
      };

      await Blogs.updateOne(
        {
          slug,
        },
        newObj
      );
    } catch (e) {
      res.status(500).json({
        message: "Something went wrong",
        cause: e.message,
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: "Saved successful",
      success: true,
    });
    return;
  }
  res.status(405).json({ message: "Method Not Allowed", success: false });
}
