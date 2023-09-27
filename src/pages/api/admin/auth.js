const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

export default async function auth(req, res) {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    try {
      const user = jwt.verify(authHeader, secretKey);
      next();
    } catch (e) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
}
