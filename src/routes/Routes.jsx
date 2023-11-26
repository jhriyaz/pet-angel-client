import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";
import PetListing from "../pages/pet-listing/PetListing";
import LogIn from "../pages/Auth/LogIn";
import Register from "../pages/Auth/Register";

import DashBoard from "../pages/dashboard/DashBoard";

const Routes = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },{
                path: '/pet-listing',
                element:<PetListing></PetListing>
            },{
                path: '/donation-campaigns',
                element:<DonationCampaigns></DonationCampaigns>
            },
        ]
    },{
        path:'/auth/login',
        element:<LogIn></LogIn>
    },{
        path:'/auth/register',
        element:<Register></Register>
    },{
        path:'/dashboard',
        element:<DashBoard></DashBoard>
    }
])

export default Routes;