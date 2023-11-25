import { Grid } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const LoadingRow = () => {
    return (
       <Grid container spacing={5} sx={{justifyContent: 'center',alignItems: 'center',padding:'8px'}}>
<Grid item lg={3} md={4} sm={6} xs={12} sx={{display:{lg:'block',md:'block',sm:'block',xs:'block'}}}>
<Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
</Grid>
<Grid item lg={3} md={4} sm={6} xs={12} sx={{display:{lg:'block',md:'block',sm:'block',xs:'none'}}}>
<Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
</Grid>
<Grid item lg={3} md={4} sm={6} xs={12} sx={{display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
<Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
</Grid>
<Grid item lg={3} md={4} sm={6} xs={12} sx={{display:{lg:'block',md:'none',sm:'none',xs:'none'}}}>
<Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
</Grid>
       </Grid>
    );
};

export default LoadingRow;