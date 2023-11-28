
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Grid } from '@mui/material';
import useAxiosIntercepter from '../../../hooks/useAxiosIntercepter';
import { toast } from 'react-toastify';

const UserTable = ({Users,refetch}) => {
  let AxiosCustomSecure=useAxiosIntercepter()
let handleUser=id=>{
  AxiosCustomSecure.patch(`/auth/users/${id}`)
  .then(()=>{
    refetch()
    toast.success('Success')
  })
}
  return  (
  <Grid  sx={{paddingX:1,paddingTop:1,justifyContent:'center', display:'flex',}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth:'100%'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Photo</TableCell>
            <TableCell align="right">center</TableCell>
            <TableCell align="right">center</TableCell>
            <TableCell align="right">center</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Users?.map((row,i) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               
                <Avatar alt="Remy Sharp" src={row.photo} />
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center"><Button disabled={row.role==='admin'?true:false} onClick={()=>handleUser(row._id)}> Make Admin</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
  );
}


export default UserTable;