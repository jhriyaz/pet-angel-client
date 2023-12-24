import Marquee from "react-fast-marquee";
import SectionTittle from "../../../components/shared/SectionTittle";
import { Card, Container, Rating, Typography } from "@mui/material";
let data=[{name:'jahid',Comment:'good',ratting:3},{name:'jahid',Comment:'asdafs',ratting:5},{name:'jahid',Comment:'asdafs',ratting:2},{name:'jahid',Comment:'asdafs',ratting:3},{name:'jahid',Comment:'asdafs',ratting:1},{name:'jahid',Comment:'asdafs',ratting:2},{name:'jahid',Comment:'asdafs',ratting:4},{name:'jahid',Comment:'asdafs',ratting:4},{name:'jahid',Comment:'asdafs',ratting:5},{name:'jahid',Comment:'asdafs',ratting:2},{name:'jahid',Comment:'asdafs',ratting:4},{name:'jahid',Comment:'asdafs',ratting:5},{name:'jahid',Comment:'asdafs',ratting:5},{name:'Rofiq',Comment:'great',ratting:3},{name:'jahid',Comment:'asdafs',ratting:3}]
const Reviews = () => {
    return (
      <Container sx={{overflow:'hidden'}}>
           <SectionTittle tittle='Reviews' desc='User Reviews'></SectionTittle>
       <Marquee pauseOnHover={true} loop={0} style={{padding:2,marginTop:'60px'}} >
   {data.map((review,i)=>{
       return <Card key={i} sx={{ maxWidth: 345,padding:3,marginX:2 }}>

        <img width={120} src="https://img.lovepik.com/free-png/20210926/lovepik-boy-head-png-image_401385760_wh1200.png"/>
        <Typography color='black' sx={{fontWeight: 'bold'}}>
            {review.name}
         </Typography>
         <Typography>
         {review.Comment}
         </Typography>
        <Rating name="read-only" value={review.ratting} readOnly />
 
        </Card>
   })}
       </Marquee>
      </Container>
    );
};

export default Reviews;