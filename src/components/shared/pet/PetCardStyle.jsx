
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const PetCardStyle = ({pet}) => {
   let {image,name,location,age,_id} = pet
    return (<Grid item lg={3} md={4} sm={6} xs={12}>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
                Age :
            </span>
           {age}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:'flex',alignItems:'center' }}>
            <span style={{fontWeight:'bold' }}>
                Location :
            </span>
           {location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Link to={`/pet/${_id}`}>
       <Button size="small" color="button">
          Check Out
        </Button>
        </Link>
      </CardActions>
    </Card>
    </Grid>)
};

export default PetCardStyle;