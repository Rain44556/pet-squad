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
        },
        {
          path: '/peListing',
          element: <h1>list</h1>
      },
      {
        path: '/donationCampaigns',
        element: <h1>donation</h1>
    },
    {
      path: '/login',
      element: <h1>login</h1>
  }
      ]
    },
]);