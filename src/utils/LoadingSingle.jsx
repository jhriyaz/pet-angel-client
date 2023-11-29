import { Container, Grid, Stack } from "@mui/material"

import Skeleton from '@mui/material/Skeleton';

const LoadingSingle = () => {




    
    return (
        <Container sx={{paddingTop:'20px'}}>
    
        <Grid>
        
        <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={'100%'} height={'100%'} />
      <Skeleton variant="rectangular"  width={'100%'} height={60} />
      <Skeleton variant="rounded" width={'100%'}height={60} />
    </Stack>
      
  
        </Grid>
      
        </Container>
    );
};

export default LoadingSingle;