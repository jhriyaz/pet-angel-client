
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  Button, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Swal from 'sweetalert2';
import useAxiosIntercepter from '../../../../hooks/useAxiosIntercepter';

const AdoptionTable = ({requests,refetch}) => {
  let AxiosCustomSecure=useAxiosIntercepter()

console.log(requests)


let handleDelete=(id,name)=>{


  Swal.fire({
    title: "Are you sure?",
    text: `${name}'s request will be deleted!`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete pet!"
  }).then((result) => {
    if (result.isConfirmed) {
     try{
      AxiosCustomSecure.delete(`/api/my-adoption/${id}`).then(data=>{
        if(data?.data?.deletedCount){
          Swal.fire({
            title: "Deleted!",
            text:` ${name}'s request deleted`,
            icon: "success"
          });
          refetch()
        }
      
  
      })
  
     }catch(err){
console.error(err)
     }
   

     
    }
  });

}
let handleAdopted=(petId,name)=>{


  Swal.fire({
    title: "Are you sure?",
    text: `Some one Adopted ${name}!`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Adopted!"
  }).then((result) => {
    if (result.isConfirmed) {
     try{
      AxiosCustomSecure.patch(`/api/adopt/${petId}`).then(data=>{
        if(data.data.deletedCount>0){
          Swal.fire({
            title: "Adopted!",
            text:` ${name} is adopted`,
            icon: "success"
          });
          refetch()
        }
       
  
      })
  
     }catch(err){
console.error(err)
     }
   

     
    }
  });

}

  return  (
  <Grid  sx={{paddingX:1,paddingTop:1,justifyContent:'center', display:'flex',overflow:'scrool'}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth:'100%'}} aria-label="simple table">
        <TableHead>
          <TableRow>
         
            <TableCell>Pet Photo</TableCell>
            <TableCell sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1}} align="center">Requested By </TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests?.map((row,i) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
         
                <img src={row.petId.image} alt="Profile Pic" style={{width:'50px',borderRadius:'100px'}}/>
            </TableCell>
              <TableCell>
              <TableCell align="center">{row.name}</TableCell>
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell  align="center"> {row.address}</TableCell>
              <TableCell align="center"> 
              <Grid sx={{display:'flex' ,gap:0,alignItems:'center'}}>

<Button  onClick={()=>handleAdopted(row.petId._id,row.name)}  color='button'><CheckCircleIcon></CheckCircleIcon>Accept </Button>
<Button onClick={()=>handleDelete(row._id,row.name)} sx={{color:'darkred'}}><DeleteForeverIcon></DeleteForeverIcon></Button>
              </Grid>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
  );


  
};




export default AdoptionTable;