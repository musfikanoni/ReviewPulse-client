import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddService from "../pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route not found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: 'addService',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: 'register',
          element: <Register></Register>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        }
      ]
    },
  ]);

  export default router;