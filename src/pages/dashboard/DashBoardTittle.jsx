import { Divider, Typography } from '@mui/material';


const DashBoardTittle = ({tittle}) => {
    return (
      <>
        <Typography sx={{marginY:2,paddingY:2,fontWeight:'bolder', textAlign:'center',background:'#dbd9d9'}}> {tittle }</Typography>
        <Divider variant="middle" /></>
    );
};

export default DashBoardTittle;