import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import DashBoardTittle from "../DashBoardTittle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PetsIcon from '@mui/icons-material/Pets';
import { useQuery } from "react-query";
import useAxiosIntercepter from "../../../hooks/useAxiosIntercepter";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import LoadingTable from "../../../utils/LoadingTable";
const validationSchema = yup.object({
  image: yup.string("Enter Pet Image").required("Image is required"),
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



const UpdatePet = () => {

  let AxiosCustomSecure=useAxiosIntercepter()
  let AxiosCustomPublic=useAxiosPublic()
  let id=useParams().id





  let {data:petData,isLoading,isFetching,refetch} = useQuery(
    {
      queryKey:['petUpdate'],
      queryFn:async()=>{
       let data= await AxiosCustomSecure.get(`/api/petget/${id}`)
        return  data.data
      }
    }
  )



const formik = useFormik({
  initialValues: {
    image: petData?.image,
    name: petData?.name,
    age: petData?.age,
    category: petData?.category,
    location: petData?.location,
    short_description: petData?.short_description,
    long_description: petData?.long_description,
  },
  validationSchema: validationSchema,
  onSubmit: (values) => {
 
    try {
      AxiosCustomSecure.patch(`/api/pets/${id}`,values)
      .then((data)=>{
       if(data?.data){
toast.success('Update Successfully')
refetch()
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




      if(isLoading||isFetching){
        return <LoadingTable></LoadingTable>
      }


    return (
      <Grid>
      <DashBoardTittle tittle={`Update ${petData.name} Details`}></DashBoardTittle>

      <form onSubmit={formik.handleSubmit}>
        <Grid sx={{ display: "grid", gap: "7px", maxWidth: "800px" }}>
          <TextField
            fullWidth
            id="image"
            name="image"
            label="Pet Image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
          />
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
    {categories?.map(category =><MenuItem key={category.category} value= {category.category.toLowerCase()}>{category.category} </MenuItem>)}
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
    </Grid>
    );
};

export default UpdatePet;





