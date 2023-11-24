import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CategoryCard = ({category,image,details}) => {
    return (
        <Card>
        <CardMedia
          sx={{ height: 300 }}
          image={image}
          title={`${category} Image`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {details.slice(0,50)}
          </Typography>
        </CardContent>
        <CardActions sx={{display:'flex',justifyContent: 'center'}}>
          <Button variant="outlined" color='button' sx={{fontWeight:'bold'}}>Check {category}</Button>
        </CardActions>
      </Card>
    );
};

export default CategoryCard;