import { Container, Grid, Typography } from "@mui/material"
import image from '../../assets/images/logo.png'
const Footer = () => {
    return (
        <Grid>

<Container>
<Grid sx={{display:'grid' , paddingY:5,justifyContent:'center',alignContent:'center',marginX:'auto'}}>
    <img src={image} style={{width:'150px'}} alt="afafa" />
    <Typography sx={{textAlign:'center'}}>
        All Right Reserved
    </Typography>
</Grid>


</Container>

        </Grid>
    );
};

export default Footer;