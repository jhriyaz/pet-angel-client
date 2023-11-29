import { Link } from 'react-router-dom';
import './error.css'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
const ErrorPage = () => {
    return (


<Container>
<Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={'100%'} height={250}
            />
          </Grid>
          <Grid item xs={12} lg={6}> 
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
          <Link to='/'>
          <Button variant="contained">Back Home</Button>
          </Link>
          </Grid>
        
        </Grid>
      </Container>
    </Box>
</Container>

    );
};

export default ErrorPage;