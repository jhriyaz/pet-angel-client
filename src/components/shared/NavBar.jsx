import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
const drawerWidth = 240;
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const navItems = [{name:'Home',link:'/'},{name:'Pet Listing',link:'/pet-listing'},{name:'Donation Campaigns',link:'/donation-campaigns'} ];

import logo from "./../../assets/images/logo.png";
import { Avatar, Container, Grid } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar = (props) => {

let{user}=useAuth()


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="img"
        alt="Site Logo."
        src={logo}
        sx={{
          width: "80px",
          my: 2,
        }}
      />
      <Divider />
      <List className="NavItems">
        {navItems.map((item) => (
        <NavLink key={item.name} to={`${item.link}`}>
              <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        </NavLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar position='sticky'>
        <Container>
          <Toolbar>
            <Grid container justifyContent={'space-between'} alignItems={'center'}>
           <Grid item lg={3}>
          <Link to='/'>
          <Box
            component="img"
            alt="Site Logo."
            src={logo}
            sx={{ display: { sm: "block" }, width: "80px", my: 2 }}
          />
          </Link>
           </Grid>
           <Grid  item lg={6}>
           <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>


          
           <Box className="NavItems" sx={{ display: { xs: "none", sm: "flex",lg:'flex' ,md:'flex'},gap:3,padding:{sm:'4px'} }}>
            {navItems.map((item) => (
             <NavLink  key={item.name} to={`${item.link}`}>
                   {item.name}
             </NavLink>
            ))}
          </Box>
           </Grid>
<Grid>
     {user? <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
     <Avatar alt="Profile Photo" src="/static/images/avatar/1.jpg" />
      </Button>:<Link to='/auth/login'><Button variant="outlined" color="button" sx={{border:'3px solid ',fontWeight:700,'&:hover':{border:'3px solid #D1A87D'}}}>Log In</Button></Link>}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
</Grid>
            </Grid>
          </Toolbar>

        
          <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

        </Container>

       
      </AppBar>
    
    </Box>
  );
};

export default NavBar;
