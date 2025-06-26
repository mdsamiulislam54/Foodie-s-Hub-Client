import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './Style/style.css'
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout.jsx";
import AddRecipe from "./Components/AddRecipes/AddRecipe.jsx";
import PageNotFound from "./Components/PageNotFound/PageNotFound.jsx";
import Login from "./Components/Authentication/Login.jsx";
import Registration from "./Components/Authentication/Registration.jsx";
import UserProvider from "./ContextApi/userProvider.jsx";
import PrivateRouter from "./Components/PrivateRoute/PrivateRouter.jsx";
import MyRecipes from "./Components/MyRecipes/MyRecipes.jsx";
import AllRecipes from "./Components/AllRecipes/AllRecipes.jsx";
import Details from "./Components/DetailsRecipes/Details.jsx";
import PlanLayout from "./Layout/PlanLayout.jsx";
import Wishlist from "./Page/Wishlist/Wishlist.jsx";

import { WishlistProvider } from "./ContextApi/WishListContex/WishlistProvider.jsx";
import BlogRecipe from "./Page/Blog/BlogRecipe.jsx";
import BlogDetails from "./Page/BlogDetails/BlogDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "/add-recipe",
        element:<PrivateRouter>
          <AddRecipe/>
        </PrivateRouter>
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Registration,
      },
      {
          path:'my-recipes',
          element:<PrivateRouter>
            <MyRecipes/>
          </PrivateRouter>
      },
      {
        path: "/all-recipe",
       
        element:
          <AllRecipes/>
        
      },
      {
        path: "/details/:id",
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`),
        element:<PrivateRouter>
          <Details/>
        </PrivateRouter>
      },
      {
        path:'/wishlist',
        Component:Wishlist
      },
      {
        path:'/blogs',
        Component:BlogRecipe
      },
      {
        path:"blog-details/:id",
        loader: ({params}) => fetch(`http://localhost:5000/blog-details/${params.id}`),
        element:<BlogDetails/>
          
      }

    ],
  },
  {
    path:'/',
    Component: PlanLayout,
    children: [
    
      {
        path: "*",
        Component: PageNotFound,
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <WishlistProvider>
      <RouterProvider router={router}></RouterProvider>
      </WishlistProvider>
    </UserProvider>
  </StrictMode>
);
