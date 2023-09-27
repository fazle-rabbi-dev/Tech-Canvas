const jwt = require("jsonwebtoken");
const correctUsername = process.env.ADMIN_USERNAME;
const correctPassword = process.env.ADMIN_PASSWORD;
const secretKey = process.env.SECRET_KEY;

export default async function handler(req, res) {
  const { username, password } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }
  
  if(username === "guest" && password === "guest"){
    return res.status(200).json({
      message: "Logged in successful",
      token: "guest"
    });
  }
  
  if (username === correctUsername && password === correctPassword) {
    const token = jwt.sign(
      {
        username,
      },
      secretKey
    );

    return res.status(200).json({
      message: "Logged in successful",
      token,
    });
  }
  res.status(401).json({
    message: "Invalid credentials",
  });
}
