# 🍔 Foodie Hub 🍽️

**Foodie Hub** is a full-stack recipe management and sharing platform where users can add, update, delete, and browse recipes. It features a dynamic dashboard with real-time data visualizations via **Recharts**, user-specific recipe management, and secure authentication using **Firebase**.
## 🔗 Live Site  
👉 [Live Website Link](https://foods-hub-11.netlify.app/)

---

## 🚀 Features

- ✅ User Authentication (Firebase)
- ✅ Create / Read / Update / Delete (CRUD) for recipes
- ✅ Dynamic Dashboard with real-time analytics
- ✅ My Recipes: Filter and manage recipes by logged-in user
- ✅ All Recipes: Browse all recipes with server-side pagination
- ✅ Add New Recipe from the dashboard with form validation
- ✅ SweetAlert2 for confirmation dialogs and alerts
- ✅ Fully responsive design (Tailwind CSS)
- ✅ Server-side Pagination, Filtering, Sorting (MongoDB)
- ✅ Smooth UI Animations (Framer Motion)
- ✅ Protected Private Routes (React Router)

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
- Recharts (data visualization)
- Framer Motion

**Backend:**

- Node.js
- Express.js
- MongoDB Atlas
- CORS
- dotenv (for environment variable)
- Mongoose

---
##  Installation

- git clone 
- cd food-rcipe-app-clinet
- npm install
- npm run dev
##  Create .env file in the Server Directory

- DB_URL =mongodb+srv://userName:password@cluster0.jrbpay1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

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
