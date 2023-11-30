import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";


import LogIn from "../pages/Auth/LogIn";
import Register from "../pages/Auth/Register";

import DashBoardLayOut from "../layout/DashBoardLayOut";
import AddPet from "../pages/dashboard/addPet/addPet";
import MyPets from "../pages/dashboard/MyPets/MyPets";
import PrivateRoute from "./routecontrol/PrivateRoute";
import PublicRoute from "./routecontrol/PublicRoute";
import AdminRoute from "./routecontrol/AdminRoute";
import ManageUSers from "../pages/dashboard/users/ManageUSers";
import UpdatePet from "../pages/dashboard/update/UpdatePet";
import PetListing from "../pages/pet/pet-listing/PetListing";
import SinglePet from "../pages/pet/pet-listing/singlepet/SinglePet";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdoptionRequest from "../pages/dashboard/MyPets/adoptionRequest/AdoptionRequest";
import TestIng from "../pages/TestIng";
import AddCampaign from "../pages/DonationCampaigns/addCampaign/AddCampaign";
import MyDonationCampaign from "../pages/DonationCampaigns/addCampaign/MydonationCampaign";
import UpdateCampaign from "../pages/DonationCampaigns/addCampaign/UpdateCampaign";
import axios from "axios";
import DonationCampaigns from "../pages/pet/donationCampaign/DonationCampaigns";
import ViewCampaign from "../pages/DonationCampaigns/addCampaign/ViewCampaign";



const Routes = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },{
                path: '/pet-listing',
                element:<PrivateRoute><PetListing></PetListing></PrivateRoute>
            },
            {
                path: '/pet-listing/:category',
                element:<PrivateRoute><PetListing></PetListing></PrivateRoute>
            },{
                path:'/pet/:id',
                element:<PrivateRoute><SinglePet></SinglePet></PrivateRoute>
            },{
                path: '/donation-campaigns',
                element:<PrivateRoute><DonationCampaigns></DonationCampaigns></PrivateRoute>
            },{
                path: '/campaign/:id',
                loader:({params})=>axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/donation_campaign/${params.id}`,{withCredentials:true}),
                element:<ViewCampaign></ViewCampaign>
            }
        ]
    },{
        path:'/auth/login',
        element:<PublicRoute><LogIn></LogIn></PublicRoute>
    },{
        path:'/auth/register',
        element:<PublicRoute><Register></Register></PublicRoute>
    },{
        path:'/dashboard',
        element:<PrivateRoute><DashBoardLayOut></DashBoardLayOut></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/dashboard/add-pet',
                element:<PrivateRoute><AddPet></AddPet></PrivateRoute>
            },{
                path: '/dashboard/update/:id',
                element:<PrivateRoute><UpdatePet></UpdatePet></PrivateRoute>
            },{
                path: '/dashboard/my-added-pets',
                element:<PrivateRoute><MyPets></MyPets></PrivateRoute>
            },{
                path: '/dashboard/adoption-request',
                element:<PrivateRoute><AdoptionRequest></AdoptionRequest></PrivateRoute>
            },{
                path: '/dashboard/create-donation-campaign',
                element:<PrivateRoute><AddCampaign></AddCampaign></PrivateRoute>
            },{
                path: '/dashboard/my-donation-campaign',
                element:<PrivateRoute><MyDonationCampaign></MyDonationCampaign></PrivateRoute>
            },{
                path:'/dashboard/updatecampaign/:id',
                loader:({params})=>axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/donation_campaign/${params.id}`,{withCredentials:true}),
                element:<PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>
            },{
                path: '/dashboard/my-donations',
                element:<>donations</>
            },{
                path: '/dashboard/manageusers',
                element:<AdminRoute><ManageUSers></ManageUSers> </AdminRoute>
            }
        ]
    }
])

export default Routes;