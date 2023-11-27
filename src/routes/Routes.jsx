import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";

import LogIn from "../pages/Auth/LogIn";
import Register from "../pages/Auth/Register";

import DashBoardLayOut from "../layout/DashBoardLayOut";
import PetListing from "../pages/pet/pet-listing/PetListing";
import AddPet from "../pages/dashboard/addPet/addPet";
import MyPets from "../pages/dashboard/MyPets/MyPets";
import PrivateRoute from "./routecontrol/PrivateRoute";
import PublicRoute from "./routecontrol/PublicRoute";
import AdminRoute from "./routecontrol/AdminRoute";
import ManageUSers from "../pages/dashboard/users/ManageUSers";

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
                element:<PrivateRoute><PetListing></PetListing></PrivateRoute>
            },{
                path: '/donation-campaigns',
                element:<PrivateRoute><DonationCampaigns></DonationCampaigns></PrivateRoute>
            },
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
        children:[
            {
                path: '/dashboard/add-pet',
                element:<PrivateRoute><AddPet></AddPet></PrivateRoute>
            },{
                path: '/dashboard/my-added-pets',
                element:<PrivateRoute><MyPets></MyPets></PrivateRoute>
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
            },{
                path: '/dashboard/manageusers',
                element:<AdminRoute><ManageUSers></ManageUSers> </AdminRoute>
            }
        ]
    }
])

export default Routes;