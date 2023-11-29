import { Box, Button, Container, Grid, Typography } from "@mui/material";
import banner from '../../../assets/images/banner.png'
import bannerright from '../../../assets/images/bannerright.png'
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from "react-router-dom";
const Banner = () => {
    return (

 
     <Container sx={{height: '100%',background:`url(${banner})`, backgroundRepeat:'no-repeat',backgroundSize:'cover',justifyContent:'center' ,marginX:'auto'}}>

<Grid container justifyContent='space-between' alignItems='center'  spacing={4} sx={{position:'relative',paddingY:'40px'}} >
{/* Banner Left  Side Texts and button */}
<Grid item  lg={6} sx={{display:'grid',justifyContent: 'center',}}>
<Typography sx={{color:'black',padding:'10px'}} gutterBottom variant="h2" fontWeight='800' >Pet Adoption</Typography>
<Typography  sx={{color:'#9c9b9b' ,padding:'10px'}} gutterBottom variant="h6"  fontWeight='400' >Most of the animals available have had a terrible, cruel past. Yet their ability to forgive and love again is over whelming.</Typography>
<Link to='/pet-listing'><Button  variant="contained" color="button" sx={{color:'white',fontWeight:'800',marginTop:'20px', paddingX:'20px',paddingY:'10px', width:'fit-content'}}><PetsIcon sx={{marginRight:'4px'}}></PetsIcon> Adopt</Button></Link>
</Grid>



{/* Banner Right Side Image */}
<Grid item  lg={6} sx={{ display: { xs: "none",md:'block'}}}>
<Box
            component="img"
            alt="Site Logo."
            src={bannerright}
            sx={{ width: "100%" }}
          />
</Grid>
    </Grid>

     </Container>

 
    );
};

export default Banner;