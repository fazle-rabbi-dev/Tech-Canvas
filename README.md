# Tech-Canvas

<img width="100%" src="/public/tech-canvas.jpg" alt="Cover Image" />

Tech-Canvas is a Next.js-powered blog platform for exploring the latest in tech trends, tutorials, and insights. Optimized for SEO and user-friendly experience.

> [!Note]
> I created this blog platform to practice my web development skills, using Next.js for the project. Building this platform boosted my confidence in handling full-stack projects. I introduced a global search bar, allowing users to search throughout the entire application—a feature I implemented for the first time in this project. Additionally, I added a tag feature to each blog post and incorporated Firebase storage. The entire journey was enjoyable, and I gained valuable real-world project-building experience.

## Technologies Used
- Next.js (13.1.0)
- Tailwindcss
- Firebase (for file upload)
- `Marked` package for parsing Markdown to HTML
- `Highlight.js` for code highlighting
- MongoDB & Mongoose

## Live Demo 🎉
Explore the live version of Tech-Canvas [here](https://tech-canvas.vercel.app).


## Getting Started

#### ⚒️ Setup for Personal Use

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

#### 🟢 Environment Variables

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

#### 🔗 Social Media Links
You should add all of your social media links in the following file: **src/social-links.js**
```
Add all your social media
links in this file
```

### 📬 Connect with me

<a target="_blank" href="https://linkedin.com/in/fazlerabbidev" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="Fazle Rabbi" height="30" width="auto" /></a>
<a target="_blank" href="https://twitter.com/fazle_rabbi_dev" target="blank"><img align="center" src="https://seeklogo.com/images/T/twitter-x-logo-101C7D2420-seeklogo.com.png?v=638258862800000000" alt="Fazle Rabbi" height="30" width="auto" /></a>
<a target="_blank" href="https://medium.com/fazle-rabbi-dev" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/medium.svg" alt="Fazle Rabbi" height="30" width="auto" /></a>
<a target="_blank" href="https://dev.to/fazle-rabbi-dev" target="blank"><img align="center" src="https://seeklogo.com/images/D/dev-to-logo-BDC0EFA32F-seeklogo.com.png" alt="Fazle Rabbi" height="30" width="auto" /></a>
<a target="_blank" href="https://facebook.com/fazlerabbidev" target="blank"><img align="center" src="https://seeklogo.com/images/F/facebook-icon-black-logo-133935095E-seeklogo.com.png" alt="Fazle Rabbi" height="30" width="auto" /></a>
<a target="_blank" href="https://instagram.com/fazle_rabbi_dev" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="Fazle Rabbi" height="30" width="auto" /></a>
