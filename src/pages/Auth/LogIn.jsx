
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useNavigate } from 'react-router-dom';
import SocialSignIn from '../../components/shared/SocialSignIn';
const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

const LogIn = () => {
    let navigate=useNavigate()

    let hanleLink=(to)=>{
        navigate(to)
    }
 
      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
     <>
     <Button onClick={()=>hanleLink(-1)} sx={{position:'absolute',top:'10px', paddingLeft:'10px',borderRadius:'0px 20px 20px 0px'}} variant="contained" color='button' ><KeyboardBackspaceIcon sx={{fontWeight:'800',fontSize:'50px'}} /></Button>
     <Button onClick={()=>hanleLink('/')} sx={{position:'absolute',bottom:10,right:0, paddingRight:'10px',borderRadius:' 20px 0px 0px 20px'}} variant="contained" color='button' ><HomeIcon sx={{fontWeight:'800',fontSize:'50px'}} /></Button>
     <Container sx={{justifyContent:'center',alignItems:'center',height:'100vh',display:'flex'}}>


   
<form onSubmit={formik.handleSubmit}>
   <Grid sx={{display:'grid',gap:'7px', maxWidth:'800px'}}>
   <TextField
      fullWidth 
      id="email"
      name="email"
      label="Email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.email && Boolean(formik.errors.email)}
      helperText={formik.touched.email && formik.errors.email}
    />
    <TextField
      fullWidth
      id="password"
      name="password"
      label="Password"
      type="password"
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.password && Boolean(formik.errors.password)}
      helperText={formik.touched.password && formik.errors.password}
    />


<Typography sx={{textAlign:'right',fontSize:'12px',paddingY:1}} >Don't Have An account?
<Link to='/auth/register' style={{fontSize:'14px',color:'#f38005',textDecoration:'none',fontWeight:'bold',paddingLeft:'5px'}}>Register now</Link>
</Typography>



    <Button color="button" variant="contained" fullWidth type="submit">
      Submit
    </Button>

  <SocialSignIn></SocialSignIn>
   </Grid>
  </form>


</Container>
     </>
     
    );
};

export default LogIn;