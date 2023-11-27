import { Button, Grid, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosIntercepter from "../../hooks/useAxiosIntercepter";

const SocialSignIn = () => {
let AxiosCustomSecure=useAxiosIntercepter()
let{signInWithGoogle,signInWithGithub}=useAuth()

let from=useLocation()?.state?.from
let navigate=useNavigate()
const handleSocialSignIn=(provider)=>{
 try{
  provider()
  .then((data)=>{
    toast.error('Successful')
    let{displayName:name,email,photoURL:photo}=data.user

AxiosCustomSecure.post('/auth/users',{name,email,photo}).then(()=>{

})

if(from){
  navigate(from)
}else{
  navigate('/')
}

  })
 }
 catch(error){
console.log(error.message)
 }
}



    return (
      <Grid sx={{paddingTop:'10px', display:'grid' , gap:'10px'}} >
      <Button variant="outlined" color="button"  onClick={()=>{handleSocialSignIn(signInWithGoogle)}}>
     <Typography variant="h6" sx={{display:'flex',justifyContent: 'center',alignItems: 'center', gap:'10px'}}>
     <GoogleIcon></GoogleIcon> Sign in with Google
     </Typography>
      </Button>
      <Button variant="outlined" color="button" onClick={()=>{handleSocialSignIn(signInWithGithub)}}>
     <Typography variant="h6" sx={{display:'flex',justifyContent: 'center',alignItems: 'center', gap:'10px'}}>
     <GitHubIcon></GitHubIcon> Sign in with Github
     </Typography>
      </Button>
      </Grid>
    );
};

export default SocialSignIn;