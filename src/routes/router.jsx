import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home/Home";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
]);