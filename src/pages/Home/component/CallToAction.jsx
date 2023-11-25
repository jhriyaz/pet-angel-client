import { Box, Button, Container, Grid } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SectionTittle from "../../../components/shared/SectionTittle";


const CallToAction = () => {

    return (
        <>
       <SectionTittle tittle="Change a Life, Adopt a Pet Today!" desc='Welcome to Our Community of Compassionate Pet Lovers
       '></SectionTittle>
<Container sx={{overflow:'hidden', paddingBottom:'10px',paddingTop:'40px'}}>
<Grid container spacing={6}>
<Grid item lg={6} md={12} sm={12} xs={12}>
<Box>
<Box
  component="img"
  sx={{
    maxWidth:'580px',
    display:'flex',
    width:'100%'

  }}
  alt="Adopt Help Image."
  src="https://i.ibb.co/sQSpG79/Untitled-design-4.png"
/>


<Typography sx={{color:'#9c9b9b', paddingTop:'8px'}}>
<span style={{background:'#f4cea7',color:'black',padding:'4px'}}>Every pet deserves a loving home.</span> By choosing to adopt, you're not just bringing an animal into your life, you're changing theirs for the better. Join us in making a difference—one paw at a time.
</Typography>


<Typography variant="h4" sx={{textAlign:'center',fontWeight:'bold',paddingTop:'16px'}}>
Why Adopt?
</Typography>

    <div>
      <Accordion expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'bold'}}>Unconditional Love</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Pets offer unwavering companionship and devotion.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontWeight:'bold'}}>Save a Life</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Give a homeless pet a second chance at happiness.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontWeight:'bold'}}>Make a Difference</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Create a lifelong bond and enrich your life while transforming theirs.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
</Box>
</Grid>

<Grid item lg={6} md={12} sm={12} xs={12}>


<Accordion expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'bold'}}>Be the Change</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Ready to make a difference? Explore our adoptable pets, and discover the joy of giving a furry friend a forever home. Whether you're looking for a loyal dog, a playful cat, or another adorable companion, your new best friend might be waiting for you right now.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'bold'}}>Spread the Love</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Share your adoption story with us! Help inspire others to experience the incredible joy of rescuing a pet and giving them the love and care they deserve.
          </Typography>
        </AccordionDetails>
      </Accordion>
<Typography sx={{fontWeight:'bold', paddingTop:'16px', textAlign:'center'}}>
Start Your Journey.
</Typography>
<Grid sx={{marginX:'auto',justifyContent:'space-between',display:'flex',alignItems:'center',padding:'10px'}}>
<Button variant="outlined" color="button">Explore Pets <ArrowRightIcon></ArrowRightIcon></Button> <AcUnitIcon sx={{color:'#f38005'}}></AcUnitIcon> <Button variant="outlined"color="button">Donate Our Cause <ArrowRightIcon></ArrowRightIcon></Button> 
</Grid>
<Typography sx={{color:'#f38005',textAlign:'center', paddingTop:'10px'}}>

Together, we can make tails wag and hearts purr. Join us in transforming lives through pet adoption.
</Typography>
</Grid>

</Grid>
</Container>
</>
    );
};

export default CallToAction;