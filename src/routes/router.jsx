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
        loader: () => fetch('http://localhost:5000/pets/isNotAdopted')
      },
      {
        path: '/petDetails/:id',
        element: <PetDetails></PetDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/pets/${params.id}`)
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
    // element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    element: <Dashboard></Dashboard>,
    children: [
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
        loader: ({params}) => fetch(`http://localhost:5000/pets/${params.id}`)
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
        loader: ({params}) => fetch(`http://localhost:5000/donationCampaign/${params.id}`)
      },
      {
        path: 'myDonations',
        element: <MyDonation></MyDonation>
      },
    ]
  },
  {
    path: "*",
    element: <Error404></Error404>
  }
]);