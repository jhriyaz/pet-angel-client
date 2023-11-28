import { Container, Grid } from "@mui/material"

import Skeleton from '@mui/material/Skeleton';

const LoadingTable = () => {
    return (
   
<Container>
    
<Grid>

<Skeleton />
<Skeleton animation="wave" />
<Skeleton animation={false} />

</Grid>

<Grid>

<Skeleton />
<Skeleton animation="wave" />
<Skeleton animation={false} />

</Grid>

<Grid>

<Skeleton />
<Skeleton animation="wave" />
<Skeleton animation={false} />

</Grid>
</Container>
    );
};

export default LoadingTable;