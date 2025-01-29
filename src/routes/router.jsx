import Dashboard from "@/layout/Dashboard";
import MainLayout from "@/layout/MainLayout";
import Login from "@/pages/Auth/Login";
import Registration from "@/pages/Auth/Registration";
import Error404 from "@/pages/Error404";
import Home from "@/pages/Home/Home";
import {
  createBrowserRouter,
} from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import AddPets from "@/pages/PrivatePages/Dashboard/AddPets";
import MyAddedPets from "@/pages/PrivatePages/Dashboard/MyAddedPets";
import UpdatePet from "@/pages/PrivatePages/Dashboard/UpdatePet";
import NotAdoptedPetListing from "@/pages/NotAdoptedPetListing/NotAdoptedPetListing";
import PetDetails from "@/pages/PetDetails/PetDetails";
import AdoptionRequest from "@/pages/PrivatePages/Dashboard/AdoptionRequest";
import CreateDonation from "@/pages/PrivatePages/Dashboard/DonationCampaigns/CreateDonation";
import MyDonationCampaigns from "@/pages/PrivatePages/Dashboard/DonationCampaigns/MyDonationCampaigns";
import UpdateDonationCampaign from "@/pages/PrivatePages/Dashboard/DonationCampaigns/UpdateDonationCampaign";
import MyDonation from "@/pages/PrivatePages/Dashboard/DonationCampaigns/MyDonation";
import DonationCampaigns from "@/pages/DonationCampaigns/DonationCampaigns";
import DonationDetails from "@/pages/DonationDetails/DonationDetails";
import UserDashboard from "@/pages/PrivatePages/Dashboard/UserDashboard/UserDashboard";
import AdminDashboard from "@/pages/PrivatePages/Dashboard/AdminDashboard/AdminDashboard";
import AllUsers from "@/pages/PrivatePages/Dashboard/AdminDashboard/AllUsers";
import AllPets from "@/pages/PrivatePages/Dashboard/AdminDashboard/AllPets";
import AllDonations from "@/pages/PrivatePages/Dashboard/AdminDashboard/AllDonations";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";



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
        path: '/petListing',
        element: <NotAdoptedPetListing></NotAdoptedPetListing>,
        loader: () => fetch('https://pet-squad-server.vercel.app/pets/isNotAdopted')
      },
      {
        path: '/petDetails/:id',
        element: <PetDetails></PetDetails>,
        loader: ({params}) => fetch(`https://pet-squad-server.vercel.app/pets/${params.id}`)
      },
      {
        path: '/donationCampaigns',
        element: <DonationCampaigns></DonationCampaigns>,
        loader: () => fetch('https://pet-squad-server.vercel.app/donationCampaign')
      },
      {
        path: '/donationDetails/:id',
        element: <DonationDetails></DonationDetails>,
        loader: ({params}) => fetch(`https://pet-squad-server.vercel.app/donationCampaign/${params.id}`)
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
    // element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'user',
        element:<UserDashboard></UserDashboard>
      },
      {
        path: 'addPet',
        element: <AddPets></AddPets>
      },
      {
        path: 'myAddedPets',
        element: <MyAddedPets> </MyAddedPets>
      },
      {
        path: 'updatePet/:id',
        element: <UpdatePet></UpdatePet>,
        loader: ({params}) => fetch(`https://pet-squad-server.vercel.app/pets/${params.id}`)
      },
      {
        path: 'adoptionRequest',
        element: <AdoptionRequest></AdoptionRequest>
      },
      {
        path: 'createDonationCampaign',
        element: <CreateDonation></CreateDonation>
      },
      {
        path: 'myDonationCampaigns',
        element: <MyDonationCampaigns></MyDonationCampaigns>
      },
      {
        path: 'updateDonationCampaign/:id',
        element: <UpdateDonationCampaign></UpdateDonationCampaign>,
        loader: ({params}) => fetch(`https://pet-squad-server.vercel.app/donationCampaign/${params.id}`)
      },
      {
        path: 'myDonations',
        element: <MyDonation></MyDonation>
      },

      //admin routes
      {
        path: 'admin',
        element:<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
      },
      {
        path: 'allUsers',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'allPets',
        element:<AdminRoute><AllPets></AllPets></AdminRoute>
      },
      {
        path: 'allDonations',
        element:<AdminRoute><AllDonations></AllDonations></AdminRoute>
      },
    ]
  },
  {
    path: "*",
    element: <Error404></Error404>
  }
]);