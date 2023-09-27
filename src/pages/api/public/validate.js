const jwt = require("jsonwebtoken");
const correctUsername = process.env.ADMIN_USERNAME;
const correctPassword = process.env.ADMIN_PASSWORD;
const secretKey = process.env.SECRET_KEY;

export default async function handler(req, res) {
  const authToken = req.headers["authorization"];
  
  if(authToken && authToken === "guest"){
    return res.status(200).json({
      success: true,
    });
  }
  
  if (authToken) {
    try {
      const isValid = jwt.verify(authToken, secretKey);
      
      res.status(200).json({
        success: true,
      });
      
    } catch (e) {
      res.status(401).json({
        success: false,
      });
    }
  } else {
    res.status(401).json({
      success: false,
    });
  }
}
