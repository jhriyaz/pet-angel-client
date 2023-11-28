
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Grid } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PetsIcon from '@mui/icons-material/Pets';
import useAxiosIntercepter from '../../../hooks/useAxiosIntercepter';
import { Link } from 'react-router-dom';

const MyPetsTable = ({pets,refetch,page,perPages,setSort,sort,refetchPetCount}) => {
  let AxiosCustomSecure=useAxiosIntercepter()


let handleDelete=id=>{
    console.log(id)
}
let handleAdopted=id=>{
    console.log(id)
}

  return  (
  <Grid  sx={{paddingX:1,paddingTop:1,justifyContent:'center', display:'flex',}}>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell align="center">Name</TableCell>
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
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right"> {row.adopted?'Adopted':'Not Adopted'}</TableCell>
              <TableCell align="right"> 
              <Grid sx={{display:'flex' ,gap:0,alignItems:'center'}}>
<Link to={`/pet/update/${row._id}`}><Button color="button"><ModeEditIcon></ModeEditIcon></Button></Link>
<Button  onClick={()=>handleAdopted(row._id)} color='button'><PetsIcon></PetsIcon> Adopted</Button>
<Button onClick={()=>handleDelete(row._id)} sx={{color:'darkred'}}><DeleteForeverIcon></DeleteForeverIcon></Button>
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