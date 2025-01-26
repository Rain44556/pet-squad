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
        element: <h2>cre</h2>
      },
      {
        path: 'myDonationCampaigns',
        element: <h1>dona</h1>
      },
      {
        path: 'myDonations',
        element: <h1>doa</h1>
      },
    ]
  },
  {
    path: "*",
    element: <Error404></Error404>
  }
]);