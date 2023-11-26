import { Container, Grid, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PetsIcon from '@mui/icons-material/Pets';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import  './dashboard.css'
import DashBoardTittle from "./DashBoardTittle";

const DashBoard = () => {
let {user}=useAuth()
let navigate=useNavigate()
const handleGo=(to)=>{
  navigate(to)
}

let links=[{tittle:'Add pet',link:'add-pet',icon:AddCircleOutlineIcon},
{tittle:'My added pets',link:'my-added-pets',icon:PetsIcon},
{tittle:'Adoption Request',link:'adoption-request',icon:RocketLaunchIcon},
{tittle:'Create Donation Campaign',link:'create-donation-campaign',icon:AddTaskIcon},
{tittle:'My Donation Campaigns',link:'my-donation-campaign',icon:VolunteerActivismIcon},
{tittle:'My Donations',link:'my-donations',icon:CurrencyExchangeIcon}]


  return (
   <Grid  sx={{paddingY:4,background:'#f38005',paddingX:2,minHeight:'100vh'}}>
   <Container sx={{display:'flex',justifyContent:'space-between',alignItems: 'center',}}>
   <Typography sx={{fontWeight:'bold',color:'#4c4e4f'}}>Dashboard</Typography>
    <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:2,}}>
  
    <KeyboardBackspaceIcon sx={{fontSize:'35px','&:hover':{color:'white'}}} onClick={()=>{handleGo(-1)}}></KeyboardBackspaceIcon>
   <HomeIcon sx={{fontSize:'35px','&:hover':{color:'white'}}}  onClick={()=>{handleGo('/')}}></HomeIcon>
    </Grid>
   </Container>

    <Container>

<Grid container sx={{paddingTop:'20px'}}>
<Grid item lg={3} xs={6}>
<List id='DashboardLinks'
      sx={{ width: '100%', maxWidth: 360,height:'800px',background:'#dbd9d9' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader sx={{background:'#dbd9d9'}}component="div" id="nested-list-subheader">
     
        <Typography sx={{paddingY:2,fontWeight:'bolder',width:'100%'}}>  Hello, {user?.displayName} 💕</Typography>
        </ListSubheader>
      }
    >
      
    
     {links.map(list=><NavLink  to={list.link} key={list.link}>
      <ListItemButton >
        <ListItemIcon>
          <list.icon />
        </ListItemIcon>
        <ListItemText primary={list.tittle} />
      </ListItemButton>
     </NavLink>
      )}
      
    </List>























</Grid>
<Grid item lg={9} xs={6} sx={{paddingLeft:2,paddingTop:2,background:'#dbd9d9'}}>

<Outlet>
  
  </Outlet>
</Grid>

</Grid>
    </Container>
    </Grid>
  );
};

export default DashBoard;