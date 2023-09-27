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

  const { slug } = req.query;
  if (req.method === "DELETE") {
    const ref = await Blogs.deleteOne({ slug });
    return res.status(405).json({
      message: "Deleted successful",
    });
  }
  res.status(405).json({
    message: "Method not allowed",
  });
}
