import { Menu } from "@mui/icons-material"
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { useState } from "react";
import { NavBar } from "./NavBar";


export const SideBar = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
   <AppBar position="static">
   <Toolbar>
     <IconButton
       size="large"
       edge="start"
       color="inherit"
       aria-label="menu"
       sx={{ mr: 2 }}
       onClick={toggleDrawer(true)}
     >
       <Menu />
     </IconButton>
     <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
       Loteria
     </Typography>
     <Button color="inherit">Login</Button>
   </Toolbar>
   <NavBar toggleDrawer = {toggleDrawer} open={open}/>
 </AppBar>
  )
}
