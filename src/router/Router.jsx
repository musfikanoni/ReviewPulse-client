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
import AllServices from "../pages/Home/AllServices";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import FeaturedServices from "../pages/Home/FeaturedServices";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route not found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            children: [
              {
                path: "/",
                element: <FeaturedServices></FeaturedServices>,
                loader: () => fetch('http://localhost:5000/'),
              }
            ]
        },
        {
          path: 'services',
          element: <AllServices></AllServices>,
          loader: () => fetch('https://assignment-11-server-eta-jade.vercel.app/services'),
        },
        {
          path: 'services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`https://assignment-11-server-eta-jade.vercel.app/services/${params.id}`),
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