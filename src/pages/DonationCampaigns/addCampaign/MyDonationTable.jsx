
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  Button, Grid } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2';
import useAxiosIntercepter from '../../../hooks/useAxiosIntercepter';



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


const MyDonationTable = ({donation,refetch}) => {
  let AxiosCustomSecure=useAxiosIntercepter()

  let data=(97000/98000)*100

let handlePause=(id,name,status) => {


  Swal.fire({
    title: "Are you sure?",
    text: `You want to ${status?'pause':'open'}  donation for ${name}!`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete pet!"
  }).then((result) => {
    if (result.isConfirmed) {
     try{
      AxiosCustomSecure.patch(`/api/donation_campaign/updates/status/${id}`).then(data=>{
        if(data?.data){
          Swal.fire({
            title: "Success!",
            text:`${status?'pause':'open'} Success`,
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
  <Grid  sx={{paddingX:1,paddingTop:1,justifyContent:'center', display:'flex',overflowX:'auto'}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth:'100%'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell>name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell  align="center"> Progress</TableCell>
            <TableCell align="center">Action</TableCell>
            <TableCell align="center">Donators</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donation?.map((row,i) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
              {(i+1)}
             
            </TableCell>
              <TableCell>
             <img src={row?.image} alt="Profile Pic" style={{width:'50px',borderRadius:'100px'}}/>
              </TableCell>
              <TableCell align="center">{row?.name}</TableCell>
              <TableCell align="center">{row?.max_amount} 
               </TableCell>
              <TableCell  align="center"> <BorderLinearProgress variant="determinate" value={data} /></TableCell>
              <TableCell align="center"> 
              <Grid sx={{display:'flex' ,gap:0,alignItems:'center' ,}}>
<Link to={`/dashboard/updatecampaign/${row._id}`}><Button color="button"><ModeEditIcon></ModeEditIcon></Button></Link>
{row?.open?<Button  onClick={()=>handlePause(row._id,row.name,row?.open)}  color='button'><PauseIcon></PauseIcon> </Button>:<Button  onClick={()=>handlePause(row._id,row.name,row?.open)}  color='button'><PlayArrowIcon></PlayArrowIcon></Button>}

              </Grid>
              </TableCell>
              <TableCell  align="center"><Link to={`/campaign/${row._id}/#topDonations`}><Button>Check Donators</Button></Link> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
  );


  
};

export default MyDonationTable;