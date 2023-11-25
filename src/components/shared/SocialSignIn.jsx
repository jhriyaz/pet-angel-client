import { Button, Grid, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
const SocialSignIn = () => {
    return (
      <Grid sx={{paddingTop:'10px', display:'grid' , gap:'10px'}} >
      <Button variant="outlined" color="button">
     <Typography variant="h6" sx={{display:'flex',justifyContent: 'center',alignItems: 'center', gap:'10px'}}>
     <GoogleIcon></GoogleIcon> Sign in with Google
     </Typography>
      </Button>
      <Button variant="outlined" color="button">
     <Typography variant="h6" sx={{display:'flex',justifyContent: 'center',alignItems: 'center', gap:'10px'}}>
     <GitHubIcon></GitHubIcon> Sign in with Github
     </Typography>
      </Button>
      </Grid>
    );
};

export default SocialSignIn;