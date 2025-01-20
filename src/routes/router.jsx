import Dashboard from "@/layout/Dashboard";
import MainLayout from "@/layout/MainLayout";
import Login from "@/pages/Auth/Login";
import Registration from "@/pages/Auth/Registration";

import Error404 from "@/pages/Error404";
import Home from "@/pages/Home/Home";
import {
  createBrowserRouter,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Pets from "@/pages/PrivatePages/Dashboard/pets";
import AddPets from "@/pages/PrivatePages/Dashboard/AddPets";

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
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'addPet',
        element: <AddPets></AddPets>
      },
      {
        path: 'pets',
        element: <Pets></Pets>
      },
      {
        path: 'adoptionRequest',
        element: <Pets></Pets>
      },
      {
        path: 'createDonationCampaign',
        element: <Pets></Pets>
      },
      {
        path: 'myDonationCampaigns',
        element: <Pets></Pets>
      },
      {
        path: 'myDonations',
        element: <Pets></Pets>
      },
    ]
  },
  {
    path: "*",
    element: <Error404></Error404>
  }
]);