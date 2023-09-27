# Tech-Canvas

Tech-Canvas is a solo-authored tech blog web application, meticulously crafted with the following technologies:

- Next.js (13.1.0)
- Tailwindcss
- Firebase (for file upload)
- Marked package for parsing Markdown to HTML
- Highlight.js for code highlighting
- MongoDB & Mongoose

## Live Demo

Explore the live version of Tech-Canvas [here](https://tech-canvas.vercel.app).


## Getting Started

### Setup for Personal Use

If you want to utilize this blog web app for your own purposes, follow these steps:

1. Clone the repository:
   ```bash
   $ git clone https://github.com/fh-rabbi/tech-canvas
   ```

2. Install dependencies:
   ```bash
   $ npm i
   ```

3. Run the project in development mode:
   ```bash
   $ npm run dev
   ```

### Environment Variables

Make sure to set the following environment variables in your `.env` file:
* ***NOTE***: You will need to setup firebase cloud storage and also create a **image** folder in firebase storage
```bash
MONGO_URI=                   # MongoDB connection URI (only uri without dbname)
FIREBASE_API_KEY=            # Firebase config api key 
FIREBASE_APP_ID=             # Firebase config app id
ADMIN_API_ROOT=              # Admin API root path (https://domain/api/admin)
PUBLIC_API_ROOT=             # Public API root path (https://domain/api/public)
ADMIN_USERNAME=              # Admin username
ADMIN_PASSWORD=              # Admin password
SECRET_KEY=                  # Secret key for authentication
NEXT_PUBLIC_DOMAIN=          # Public domain for the app
GMAIL_USERNAME=              # Your gmail account username for send email
GMAIL_PASSWORD=              # Gmail app password (you need to enable two factor auth then you will find app password under gmail_account>security>two_factor>app_password)
RECEIVER_EMAIL=              # Email address where you want to receive contact email/message from contact form 
```

### Social Media Links
You should add all of your social media links in the following file: **src/social-links.js**
```
Add all your social media
links in this file
```

---

Tech-Canvas provides a robust foundation for tech enthusiasts to share their insights and knowledge. If you have any questions or need further assistance, feel free to reach out. Happy blogging! 🚀