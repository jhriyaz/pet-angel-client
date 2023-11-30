
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  Button, Grid } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosIntercepter from '../../../hooks/useAxiosIntercepter';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PetsIcon from '@mui/icons-material/Pets';
const MyPetsTable = ({pets,refetch,page,perPages,sort,setSort,refetchPetCount}) => {
  let AxiosCustomSecure=useAxiosIntercepter()




  let handleSort=()=>{
    setSort(sort)
  }

let handleDelete=(id,name)=>{


  Swal.fire({
    title: "Are you sure?",
    text: `You want to delete ${name}!`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete pet!"
  }).then((result) => {
    if (result.isConfirmed) {
     try{
      AxiosCustomSecure.delete(`/api/delete/${id}`).then(data=>{
        if(data?.data?.deletedCount){
          Swal.fire({
            title: "Deleted!",
            text:` ${name} is deleted`,
            icon: "success"
          });
          refetchPetCount()
          refetch()
        }
      
  
      })
  
     }catch(err){
console.error(err)
     }
   

     
    }
  });

}
let handleAdopted=(id,name)=>{


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
      AxiosCustomSecure.patch(`/api/adopt/${id}`).then(data=>{
        if(data.data.deletedCount>0){
          Swal.fire({
            title: "Adopted!",
            text:` ${name} is adopted`,
            icon: "success"
          });
          refetchPetCount()
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
  <Grid  sx={{paddingX:1,paddingTop:1,justifyContent:'center', display:'flex',overflow:'scroll'}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth:'100%'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1}}  onClick={handleSort}  align="center">Name {sort?<ArrowUpwardIcon></ArrowUpwardIcon>:<ArrowDownwardIcon></ArrowDownwardIcon>}</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pets?.map((row,i) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
              {(perPages*(page-1))+(i+1)}
             
            </TableCell>
              <TableCell>
             <img src={row.image} alt="Profile Pic" style={{width:'50px',borderRadius:'100px'}}/>
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell  align="center"> {row.adopted?'Adopted':'Not Adopted'}</TableCell>
              <TableCell align="center"> 
              <Grid sx={{display:'flex' ,gap:0,alignItems:'center'}}>
<Link to={`/dashboard/update/${row._id}`}><Button color="button"><ModeEditIcon></ModeEditIcon></Button></Link>
{row.adopted?<Button disabled color='button'><PetsIcon></PetsIcon>Adopted </Button>:<Button  onClick={()=>handleAdopted(row._id,row.name)}  color='button'><PetsIcon></PetsIcon>Adopt </Button>}
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

export default MyPetsTable;