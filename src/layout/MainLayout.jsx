import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import { Grid } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    return (
        <Grid style={{display:'grid'}}>
        
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
pauseOnHover
/>
{/* Same as */}
<ToastContainer />

<Footer></Footer>
        </Grid>
    );
};

export default MainLayout;