import nodemailer from "nodemailer";
// import rateLimit from 'express-rate-limit';
const myGmailUserName = process.env.GMAIL_USERNAME;
const myGmailPassword = process.env.GMAIL_PASSWORD;

const emailTemplate = (name, email, phone, message) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">

    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333333;">New Contact Form Submission</h1>
        <p style="color: #666666;">You have received a new message from your blog's contact form:</p>

        <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px;">
                <strong style="color: #333333;">Name:</strong>
                <span style="color: #666666;">${name}</span>
            </li>
            <li style="margin-bottom: 10px;">
                <strong style="color: #333333;">Email:</strong>
                <span style="color: #666666;">${email}</span>
            </li>
            <li style="margin-bottom: 10px;">
                <strong style="color: #333333;">Phone:</strong>
                <span style="color: #666666;">${phone}</span>
            </li>
            <li style="margin-bottom: 10px;">
                <strong style="color: #333333;">Message:</strong>
                <span style="color: #666666;">${message}</span>
            </li>
        </ul>
    </div>

</body>
</html>
`;
}

// Create a rate limiter
/*const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per 15 minutes
  onLimitReached: (req, res, options) => {
    res.status(429).json({
      message: "Too many requests. Please try again later.",
      success: false
    });
  },
});
*/
export default async function handler(req, res) {
  const { name, email, phone, message } = req.body;
  
  // await limiter(req, res);
  
  if(!name && !message){
    return res.status(500).json({
      success: false,
      message: "Oops! something went wrong"
    })
  }
  
  // Create a transporter using nodemailer
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${myGmailUserName}@gmail.com`,
      pass: myGmailPassword,
    },
  });

  // Set up the email options
  let mailOptions = {
    from: `${myGmailUserName}@gmail.com`,
    to: process.env.RECEIVER_EMAIL,
    subject: "Tech-Canvas - Contact Form",
    html: emailTemplate(name, email, phone, message),
  };
  
  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: "Email sent successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
}
