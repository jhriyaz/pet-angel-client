import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";

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
                element:<AdoptionRequest></AdoptionRequest>
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