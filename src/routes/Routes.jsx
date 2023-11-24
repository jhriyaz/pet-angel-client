import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";
import PetListing from "../pages/pet-listing/PetListing";

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
            }
        ]
    }
])

export default Routes;