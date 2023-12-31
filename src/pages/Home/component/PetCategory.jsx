
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SectionTittle from '../../../components/shared/SectionTittle';
import { Container, Grid } from '@mui/material';
import CategoryCard from './CategoryCard';
import './customSwipe.css'
import { useQuery } from "react-query";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import LoadingRow from '../../../utils/LoadingRow';


const PetCategory = () => {


  let AxiosCustomPublic=useAxiosPublic()
  let {data:categories,isLoading,isFetching} = useQuery(
        {
          queryKey:['PetCategory'],
          queryFn:async()=>{
           let data= await AxiosCustomPublic.get('/api/categories')
            return  data.data
          }
        }
      )




    return (
    <Grid>
    
    <SectionTittle tittle='Pet Category' desc="Pick Your Favorite pet by Category"></SectionTittle>
    <br />
    <Container sx={{marginX:'auto',padding:{xs:'4px',sm:'4px'}}}>

{isLoading||isFetching ?<LoadingRow/>: <Swiper 
         breakpoints={{
          320: { slidesPerView: 1, spaceBetween:40 },
          480: { slidesPerView: 2, spaceBetween: 40 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween:40 },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >{categories?.map(category =><SwiperSlide key={category.category}><CategoryCard category={category.category} image={category.image} details={category.details}></CategoryCard></SwiperSlide>)}
   

</Swiper>



}



 
  </Container>


<Container>
<Grid container sx={{display:{lg:'none'}}} spacing={2}>
{categories?.map(category => <Grid item sm={4} xs={6} md={3} key={category.category}>
  <CategoryCard category={category.category} image={category.image} details={category.details}></CategoryCard>
</Grid>)}
</Grid>

</Container>


  </Grid>);
};

export default PetCategory;