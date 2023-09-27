const emailTemplate = `
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

export default emailTemplate;