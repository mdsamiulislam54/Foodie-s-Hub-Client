# 🍳 Recipe Book App

A user-friendly Recipe Book web application where users can manage their own recipes, discover recipes from others, add recipes to a wishlist, like recipes, and see top-rated dishes based on likes. This is a single-page, responsive, modern React project with Firebase authentication and MongoDB database integration.

## 🔗 Live Site  
👉 [Live Website Link](https://foods-hub-11.netlify.app/)

---

## 🚀 Features

- 🔐 **Firebase Authentication** (Email/Password & Google login)
- 📋 **Add, Update & Delete recipes** (only by logged-in users)
- ❤️ **Like feature** with restriction (users can't like their own recipe)
- 🌍 **Filter recipes** by cuisine type (Italian, Mexican, Indian, Chinese, Others)
- 📊 **Top recipes** section based on highest likes
- 🎨 **Dark/Light theme toggle**
- 📱 **Fully responsive design** for mobile, tablet, and desktop
- 🍽️ **Recipe details page** with full information and like count
- 🎉 Integrated **SweetAlert2** and **React Toast** for better user feedback
- 🎬 Beautiful animations with **GSAP**, **Swiper**, **React Simple Typewriter**, **React Tooltip**, and **React Awesome Reveal**
- ⚙️ Protected private routes for Add Recipe, My Recipes, and Recipe Details
- 📝 Custom 404 Not Found page with food theme

---

## 🛠️ Technologies & Dependencies

**Frontend:**

- React `^19.1.0`
- React Router `^7.6.0`
- Tailwind CSS `^4.1.7`
- Firebase `^11.8.1`
- GSAP `^3.13.0`
- React Icons `^5.5.0`
- SweetAlert2 `^11.21.2`
- Swiper `^11.2.7`
- React Simple Typewriter `^5.0.1`
- React Tooltip `^5.28.1`
- React Awesome Reveal
- Vite
- Axios

**Backend:**

- Node.js
- Express.js
- MongoDB Atlas
- CORS
- dotenv (for environment variable)
- Mongoose

---

## 📁 Environment Variables

Create a `.env` file in your root directory and add:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_MONGODB_URI=your_mongodb_connection_string
