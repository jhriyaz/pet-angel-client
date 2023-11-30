import {Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignIn from "../../components/shared/SocialSignIn";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import useImageUpload from "../../hooks/useImageUpload";

const validationSchema = yup.object({
  name: yup
    .string("Enter your Full Name")
    .min(4, "Full Name should be of minimum 4 characters length")
    .required("Full Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
      "Password can only contain special letters."
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
    avatar:yup.string()
    
      
});

const Register = () => {
  let navigate = useNavigate();
  let{upLoadInput,buttonToggle,uploadedImage,resetImageData}=useImageUpload()
  let hanleLink = (to) => {
    navigate(to);
  };
let {signUp,updateProf}=useAuth()
let from=useLocation()?.state?.from
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if(!uploadedImage){
        return toast.error('upload Image')
       }

      let{name,email,password}=values

      if(!uploadedImage){
        return toast.error('upload Image')
       }
try{
  signUp(email,password).then(()=>{
    updateProf(name,uploadedImage).then(()=>{
    
      if(from){
        navigate(from)
      }else{
        navigate('/')
      }
      toast.success('Successful')
      resetImageData()
    })
  })
}catch(error){
  console.error(error)
}
    
// let phot=values.photoFile
      // await axios.post(uri,phot,{
      //   headers:{
      //     "content-Type":'multipart/form-data'
      //   }
      // })
      // .then(res=>console.log(res.data))
    },
  });
  return (
    <>
      <Button
        onClick={() => hanleLink(-1)}
        sx={{
          position: "absolute",
          top: "10px",
          paddingLeft: "10px",
          borderRadius: "0px 20px 20px 0px",
        }}
        variant="contained"
        color="button"
      >
        <KeyboardBackspaceIcon sx={{ fontWeight: "800", fontSize: "50px" }} />
      </Button>
      <Button
        onClick={() => hanleLink("/")}
        sx={{
          position: "absolute",
          bottom: 10,
          right: 0,
          paddingRight: "10px",
          borderRadius: " 20px 0px 0px 20px",
        }}
        variant="contained"
        color="button"
      >
        <HomeIcon sx={{ fontWeight: "800", fontSize: "50px" }} />
      </Button>
      <Container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          display: "flex",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid sx={{ display: "grid", gap: "7px", maxWidth: "800px" }}>


{upLoadInput}
{buttonToggle}

            <TextField
              fullWidth
              id="name"
              name="name"
              label="Full Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
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
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="confirm Password"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />


            <Typography
              sx={{ textAlign: "right", fontSize: "12px", paddingY: 1 }}
            >
              Already got account?
              <Link
                to="/auth/login"
                style={{
                  fontSize: "14px",
                  color: "#f38005",
                  textDecoration: "none",
                  fontWeight: "bold",
                  paddingLeft: "5px",
                }}
              >
                LogIn now
              </Link>
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

export default Register;
