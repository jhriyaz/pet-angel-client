import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
const useImageUpload = () => {
   
    let AxiosCustomPublic=useAxiosPublic()

let [selectedFile,setSelectedFile]=useState(null)
let [uploadedImage,setUploadedImage]=useState(null)
let handleChange=async(e)=>{
setSelectedFile(e.target.files[0])



let image={upload_preset:import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET, file:e.target.files[0]}
 
let data=await AxiosCustomPublic.post(import.meta.env.VITE_CLOUDINARY_CLOUD_URL,image,{ 
  headers: {
    "content-type": "multipart/form-data"
    }
  })
let newLink=data.data.secure_url

  setUploadedImage(newLink)

}


let resetImageData=()=>{
    setUploadedImage(null)
    setSelectedFile(null)
}

let upLoadInput=<input id="image" style={{display:'none'}} onChange={handleChange}
type="file"
/>

let buttonToggle=<>
{selectedFile?<Button disabled component="label" variant="contained" sx={{display:'flex',width:'150px',height:'150px',borderRadius:'400px',background:'green!important',marginX:'auto',marginY:2}} >
 <DoneOutlineIcon sx={{fontSize:40}} />
    </Button>:<Button  htmlFor='image' component="label" variant="contained" sx={{display:'flex',width:'150px',height:'150px',borderRadius:'400px',marginX:'auto',marginY:2}} >
 <AddIcon  sx={{fontSize:40}} />
    </Button>}
</>




return {upLoadInput,buttonToggle,uploadedImage,resetImageData}
};




export default useImageUpload;