import { useQuery } from "react-query";
import LoadingSingle from "../../../../utils/LoadingSingle";
import useAxiosIntercepter from "../../../../hooks/useAxiosIntercepter";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Container,  Grid,  Modal,  TextField,  Typography } from "@mui/material";
import * as yup from "yup";
import Card from '@mui/material/Card';
import CloseIcon from '@mui/icons-material/Close';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import PetsIcon from '@mui/icons-material/Pets';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const validationSchema = yup.object({
    name:yup.string("phone category").required("Name is required"),
    email: yup.string("phone category").required("Email is required"),
    address: yup.string("phone category").required("Address is required"),
    phone: yup.string("phone category").required("phone is required"),
  });

const SinglePet = () => {
    let id=useParams().id
    let navigate=useNavigate()
    let AxiosCustomSecure=useAxiosIntercepter()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
let {user}=useAuth()

    let {data:pet,isLoading,isFetching}=useQuery({
        queryKey:'PetDetails',
        queryFn:async()=>{
            let data=await AxiosCustomSecure.get(`/api/petget/${id}`)
            return data.data
        }
    })
 
    let {data:adoption,isLoading:isLoadingAdoption,isFetching:isFetchingAdoption,refetch:refetchAdoption}=useQuery({
        queryKey:'petAdoptionCheck',
        queryFn:async()=>{
            let data=await AxiosCustomSecure.get(`/api/my-adoption-request/${id}`)
            return data.data
        }
    })
 

 
 
 



let {name,image,age,category,location,short_description,long_description,adopted,AddedBy}=pet||{}

const formik = useFormik({
    initialValues: {
      name: user.displayName,
      email: user.email,
      address: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
 
      try {
        AxiosCustomSecure.post(`/api/adoption`,{name:user.displayName,email:user.email,address:values.address,phone:values.phone,petId:id,postedBy:AddedBy})
        .then((data)=>{
         if(data?.data){
  toast.success('Adoption Request Success')
  
  refetchAdoption()
  setOpen(false)
  }
        })
      } catch (error) {
        console.error(error);
      }
    },
  });





if(isLoading||isFetching||isFetchingAdoption||isLoadingAdoption){
    return  <LoadingSingle  > </LoadingSingle>
    }



    if(!pet){
    throw new Error()
    }



    return (
      <Container sx={{paddingTop:2}}>

<div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      <Grid sx={{display:'flex' ,justifyContent:'end',paddingBottom:2}}>
       <CloseIcon onClick={handleClose}></CloseIcon>
      </Grid>

        <form onSubmit={formik.handleSubmit}>
        <Grid sx={{ display: "grid", gap: "7px", maxWidth: "800px" }}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Your Name"
            disabled
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
         
          />
           <TextField
            fullWidth
            id="email"
            name="email"
            label="Your Email"
            disabled
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
           
          />
 <TextField
            fullWidth
            id="address"
            name="address"
            label="Your Address"
        
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
           
          />
           <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Your phone"
           
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
           
          />
 <Button color="button" variant="contained" fullWidth type="submit" sx={{display:'flex',gap:1,justifyContent:'center',alignItems: 'center',fontSize:18,fontWeight:'bold'}}>
            <PetsIcon></PetsIcon>Adopt
          </Button>
        </Grid>
      </form>


        </Box>
      </Modal>
    </div>
<Card >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" sx={{display:'flex',alignItems:'center'}}>
           Age : 
           <Typography color="text.secondary">
          {age}
          </Typography>
          </Typography>
          <Typography gutterBottom  component="div">
          Category :<Button onClick={()=>navigate(`/pet-listing/${category}`)} color="button">{category}</Button>
          </Typography>
          <Typography gutterBottom component="div"  sx={{display:'flex',alignItems:'center'}}>
         Location : <Typography color="text.secondary">
          {location}
          </Typography>
          </Typography>
          <Typography gutterBottom component="div"  sx={{display:'flex',alignItems:'center'}}>
          Short Description :<Typography color="text.secondary">
          {short_description}
          </Typography>
          </Typography>
      {adopted||adoption?.requested? <Button size="small" disabled  color="button" variant="outlined" sx={{marginY:2}}>{adopted?'Adopted':'Requested'}</Button> : <Button size="small"  color="button" onClick={handleOpen} variant="outlined" sx={{marginY:2}}>Adopt</Button>}
    
     
          <Typography variant="body2" color="text.secondary" sx={{paddingTop:3}}>
           {long_description}
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
      </Container>
    );
};

export default SinglePet;