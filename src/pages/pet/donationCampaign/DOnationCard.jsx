
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment';


const DOnationCard = ({donation,time}) => {

let expired=moment(time).isAfter(moment(donation.campaignEndDate))

   let {_id,image,max_amount,name} = donation
    return (<Grid item lg={3} md={4} sm={6} xs={12}>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia 
          component="img"
          height="140"
          image={image}
          alt="Image of pet"
        />
        <CardContent>
          <Typography gutterBottom sx={{color:'gray'}} variant="h5" component="div">
           {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:'flex',alignItems:'center' }}>
          <span style={{fontWeight:'bold' }}>
                Amount Needed :
            </span>
           $ {max_amount}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:'flex',alignItems:'center' }}>
            <span style={{fontWeight:'bold' }}>
              Collected : 
            </span>
            $ {56 }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
{expired&&!open? <Button disabled>Expired</Button>:!open?<Button>Temporary Paused</Button>:expired?<Button>Expired</Button> :<Link to={`/campaign/${_id}`}>
       <Button size="small" variant='contained' sx={{color:'white'}} color="button">
          Check Out
        </Button>
        </Link>}
      </CardActions>
    </Card>
    </Grid>)
};



export default DOnationCard;