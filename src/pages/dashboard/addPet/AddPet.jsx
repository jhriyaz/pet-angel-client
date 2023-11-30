import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import DashBoardTittle from "../DashBoardTittle";
import PetsIcon from '@mui/icons-material/Pets';
import { useQuery } from "react-query";
import useAxiosIntercepter from "../../../hooks/useAxiosIntercepter";
import { toast } from "react-toastify";
import useImageUpload from "../../../hooks/useImageUpload";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const validationSchema = yup.object({
  name: yup
    .string("Enter pet name")
    .min(3, "name should be of minimum 3 characters length")
    .required("name is required"),
  age: yup.number("Enter pet age").required("age is required"),
  category: yup.string("Enter category").required("category is required"),
  location: yup.string("Enter location").required("location is required"),
  short_description: yup
    .string("Enter Short description")
    .required("Short description is required"),
  long_description: yup
    .string("Enter Long description")
    .required("Long description is required"),
});


const AddPet = () => {
    let AxiosCustomSecure=useAxiosIntercepter()
    let AxiosCustomPublic=useAxiosPublic()
let{upLoadInput,buttonToggle,uploadedImage,resetImageData}=useImageUpload()



    
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      category: "",
      location: "",
      short_description: "",
      long_description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {


     if(!uploadedImage){
      return toast.error('upload Image')
     }try {
         AxiosCustomSecure.post('/api/pets',{...values,image:uploadedImage})
         .then((data)=>{
          
          if(data?.data){
 toast.success('Added Successfully')
 resetForm()
 resetImageData()
 }
         })
       } catch (error) {
         console.error(error);
       }
     },
  });
 
    let {data:categories} = useQuery(
          {
            queryKey:['PetCategory'],
            queryFn:async()=>{
             let data= await AxiosCustomPublic.get('/api/categories')
              return  data.data
            }
          }
        )
  
  

  return (


  

    <Container>
      <DashBoardTittle tittle="Add A Pet"></DashBoardTittle>

{upLoadInput }
 {buttonToggle}
      <form onSubmit={formik.handleSubmit}>
        <Grid sx={{ display: "grid", gap: "7px", maxWidth: "800px" }}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Pet Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            fullWidth
            id="age"
            name="age"
            label="Pet age"
            type="number"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />



<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Pet category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name="category"
    fullWidth
    label="Pet category"
    value={formik.values.category}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.category && Boolean(formik.errors.category)}

  >
    {categories?.map(category =><MenuItem key={category.category} value= {category.category}>{category.category} </MenuItem>)}
  </Select>
</FormControl>



          <TextField
            fullWidth
            id="location"
            name="location"
            label="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />


<TextField
            fullWidth
            id="short_description"
            name="short_description"
            label="Short Description"
            value={formik.values.short_description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.short_description && Boolean(formik.errors.short_description)}
            helperText={formik.touched.short_description && formik.errors.short_description}
          />
<TextField
            fullWidth
            id="long_description"
            name="long_description"
            label="Long Description"
            value={formik.values.long_description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.long_description && Boolean(formik.errors.long_description)}
            helperText={formik.touched.long_description && formik.errors.long_description}
          />

          <Button color="button" variant="contained" fullWidth type="submit" sx={{display:'flex',gap:1,justifyContent:'center',alignItems: 'center',fontSize:18,fontWeight:'bold'}}>
            <PetsIcon></PetsIcon>Add Pet
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default AddPet;
