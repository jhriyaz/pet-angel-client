import { useQuery } from "react-query";
import {  useLoaderData, useParams} from "react-router-dom";
import { Box, Container,  Grid,  Modal,  TextField,  Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CloseIcon from '@mui/icons-material/Close';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import { useState } from "react";

import moment from "moment";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Payment from "../../../components/Payment/Payment";
import SectionTittle from "../../../components/shared/SectionTittle";
import useAxiosIntercepter from "../../../hooks/useAxiosIntercepter";
import SharedDonationTable from "../../../components/shared/SharedDonationTable";
import LoadingTable from "../../../utils/LoadingTable";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);





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
 






const ViewCampaign = () => {
    const [open, setOpen] = useState(false);
    const[donation,setDonation]=useState(null);
    const[error,setError]=useState(null);

const id=useParams().id



    const handleOpen = () => {
        if(isNaN(donation)){
            setError('Enter valid Number')
          return  setDonation(null)
        }
        setOpen(true)
    }
    const handleClose = () => setOpen(false);


 

    const handleDonation=(e)=>{
if(!isNaN(e.target.value)){
    setError('')
   return setDonation(e.target.value)
}setError('Enter valid Number')
    }
let donationCamp=useLoaderData().data
const AxiosCustomSecure= useAxiosIntercepter()


let{image,name,campaignEndDate,short_description,long_description,publishDate,_id}=donationCamp||{}


let {data:TopDonationcam,isLoading,isFetching,refetch:fetchTable}=useQuery({
    queryKey:['topdonationcam'],
    queryFn:async()=>{
        let data=await AxiosCustomSecure.get(`/api/campaign/donations/${id}`)
        return data.data
    }
})

let handleAfterPayment=()=>{
  setOpen(false)
  setDonation(null)
  setError(null)
  fetchTable()
}

    let pubLIsh =moment(publishDate).format("MMM Do YY")
    let EndDate= moment(campaignEndDate).format("MMM Do YY")




    if(!donationCamp){
    throw new Error()
    }



    return (
      <Container sx={{paddingTop:2}}>

<div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      <Grid sx={{display:'flex' ,justifyContent:'end',paddingBottom:2}}>
       <CloseIcon onClick={handleClose}></CloseIcon>
      </Grid>
      <Typography color="secondary" sx={{paddingY:1}}>
    Please Enter Your Card Details
</Typography>
    <Elements stripe={stripePromise}>

    <Payment amount={donation} donate={_id} handleAfterPayment={handleAfterPayment}></Payment>
    </Elements>

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
         Name:{name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" sx={{display:'flex',alignItems:'center'}}>
          Posted : {pubLIsh}
           <Typography color="text.secondary">
       
          </Typography>
          </Typography>
       
          <Typography gutterBottom component="div"  sx={{display:'flex',alignItems:'center'}}>
         End : <Typography color="text.secondary">
         {EndDate}
          </Typography>
          </Typography>
          <Typography gutterBottom component="div"  sx={{display:'flex',alignItems:'center'}}>
          Short Description :<Typography color="text.secondary">
          {short_description}
          </Typography>

          </Typography>


     
          <Typography variant="body2" color="text.secondary" sx={{paddingTop:3}}>
         {long_description}
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    <Grid  container sx={{display:'grid',justifyContent:'start',alignItems:'center',paddingY:4}}>
<TextField type="number" label="Donate Amount" size="small" value={donation} defaultValue={donation} onChange={handleDonation} >

</TextField>
<Typography variant='p' sx={{color:'red'}}>{error}</Typography>
  
    {donation?<Button size="small" color="button" onClick={handleOpen} variant="outlined" sx={{marginY:2}}>Donate</Button>:<Button size="small"  disabled  color="button" variant="outlined" sx={{marginY:2}}>Donate</Button>}
</Grid>




<Container sx={{paddingTop:'100px'}}>
<SectionTittle tittle={'Top Donations of this campaign'} id="topDonations" desc={'Some wonderful people came with blessing'}></SectionTittle>


        {isLoading||isFetching?<LoadingTable></LoadingTable>:   <SharedDonationTable donation={TopDonationcam}></SharedDonationTable>}

      </Container>





      </Container>
    );
};

export default ViewCampaign;