import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
const SharedDonationTable = ({donation}) => {
 
    return (
        <Grid  sx={{paddingX:1,paddingY:2, paddingTop:1,justifyContent:'center', display:'flex',overflowX:'auto'}}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth:'100%'}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell  align="center">Donar Email</TableCell>
              <TableCell  align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donation?.map((row,i) => (
              <TableRow  align="center"
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                  <TableCell component="th" scope="row">
                {(i+1)}
               
              </TableCell>
             
                <TableCell align="center">{row?.email}</TableCell>
                <TableCell align="center">$ {row?.price} 
                 </TableCell>
             
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
    );
};

export default SharedDonationTable;