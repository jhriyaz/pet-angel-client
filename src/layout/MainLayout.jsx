import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import { Grid } from "@mui/material";

const MainLayout = () => {
    return (
        <Grid style={{display:'grid'}}>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </Grid>
    );
};

export default MainLayout;