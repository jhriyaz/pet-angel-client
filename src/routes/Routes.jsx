import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";

import LogIn from "../pages/Auth/LogIn";
import Register from "../pages/Auth/Register";

import DashBoard from "../pages/dashboard/DashBoard";
import PetListing from "../pages/pet/pet-listing/PetListing";
import AddPet from "../pages/dashboard/addPet/addPet";

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
        element:<DashBoard></DashBoard>,
        children:[
            {
                path: '/dashboard/add-pet',
                element:<AddPet></AddPet>
            },{
                path: '/dashboard/my-added-pets',
                element:<>pets</>
            },{
                path: '/dashboard/adoption-request',
                element:<>request</>
            },{
                path: '/dashboard/create-donation-campaign',
                element:<>create</>
            },{
                path: '/dashboard/my-donation-campaign',
                element:<>campaign</>
            },{
                path: '/dashboard/my-donations',
                element:<>donations</>
            },
        ]
    }
])

export default Routes;