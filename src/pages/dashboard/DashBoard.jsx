
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

const DashBoard = () => {
    let uri= import.meta.env.VITE_CLOUDINARY_CLOUD_URL




    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
      


  const  handleSubmit=e=>{

    e.preventDefault();
  let  data=e.target.fileee
  console.log(data)
   axios.post(uri,'sdasd',{
    headers:{
      "content-Type":'multipart/form-data'
    }
})
.then(resp => resp.json())
.then(data => {
console.lof((data?.url))
})
.catch(err => console.log(err))
}
   
    return (
      <form onSubmit={handleSubmit} >
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" name='fileee' />
    </Button>
        <input type="submit" value="dasdad" />
      </form>
    );
};

export default DashBoard;