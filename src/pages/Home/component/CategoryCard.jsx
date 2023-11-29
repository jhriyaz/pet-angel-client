import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({category,image,details}) => {
  let navigate=useNavigate()
  const handleTo=link=>{
    navigate(`/pet-listing/${link}`)
  }
    return (
        <Card sx={{flexGrow:1}}>
       
        <img src={image} style={{ Height: 300,width:'100%' }} alt="gsgsdgs" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {details.slice(0,30)}
          </Typography>
        </CardContent>
        <CardActions sx={{display:'flex',justifyContent: 'center'}}>
          <Button onClick={()=>handleTo(category)} variant="outlined" color='button' sx={{fontWeight:'bold'}}>Check {category}</Button>
        </CardActions>
      </Card>
    );
};

export default CategoryCard;