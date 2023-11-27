
import { Grid } from "@mui/material";
import DashBoardTittle from "../DashBoardTittle";
import PetTable from "../users/UserTable";
import useAxiosIntercepter from "../../../hooks/useAxiosIntercepter";
import { useQuery } from 'react-query';
const MyPets = () => {

  


    return (
     <Grid>

<DashBoardTittle tittle="My added Pets"></DashBoardTittle>
<Grid container>

</Grid>
     </Grid>
    );
};

export default MyPets;