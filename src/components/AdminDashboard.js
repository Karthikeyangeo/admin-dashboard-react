import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpeedIcon from '@mui/icons-material/Speed';
import AdminAppBar from './AdminAppBar';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import { AddUser } from '../routes/addUser';
import { AddProducts } from '../routes/addProducts';
import {UserTable} from '../routes/userTable';



const drawerWidth = 240;


  function AdminDashboard() {
    const history = useHistory();
    const secondaryText = {
      color: 'white'
    }

    // format for changing color in Material UI Icons
    const iconColor ={
      color: 'white',
      size:'larger'
    }

    
    const list1 = [
      {
        text:'Add User',
        icon: <i className="fa-solid fa-user-plus  fa-lg" style={iconColor} ></i>,
        path:'/addUser'
      },
      {
        text:'Add Products',
        icon: <i className="fa-solid fa-square-plus  fa-lg" style={secondaryText} size="lg"></i>,
        path:'/addProducts'
      }
    ];

    const list2 = [
     
      {
        text:'Charts',
        icon: <i className="fa-solid fa-chart-line  fa-lg" style={secondaryText}></i>
      },
      {
        text:'User Tables',
        icon: <i className="fa-solid fa-table  fa-lg" style={secondaryText}></i>,
        path:'/userTable'
      }
    ]
    
   
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        // color="transparent"
        elevation={0}
        
      >
        <AdminAppBar />

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
        PaperProps={{
          sx: {
            backgroundColor: "#1976d2",
            color: "white",
            
          }
        
        }}
      >
        
        <Toolbar />
        <List>
        <ListItem button key={'dashboard'}component='a' href={'/'}>
              <ListItemIcon >
                <SpeedIcon style={iconColor}/>
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemText secondary={'INTERFACE'}  variant="text" secondaryTypographyProps={{style :secondaryText}} ></ListItemText>
          {list1.map((e) => (
            <ListItem button key={e.text} component='a' href={e.path}>
              <ListItemIcon>
                {e.icon}
              </ListItemIcon>
              <ListItemText primary={e.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
        <ListItemText secondary={'ADDONS'}  variant="text"  secondaryTypographyProps={{style :secondaryText}}></ListItemText>
          {list2.map((e) => (
            <ListItem button key={e.text} component='a' href={e.path}>
              <ListItemIcon>
                {e.icon}
              </ListItemIcon>
              <ListItemText primary={e.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      

      <Switch>
          {/* Each route is case, eg. - case '/about': */}
          <Route path="/addUser">
            <AddUser />
          </Route>
          <Route path="/addProducts">
            <AddProducts />
          </Route>
          <Route path="/userTable">
            <UserTable />
          </Route>
          <Route exact path ='/'>
            <h1>Hi</h1>
          </Route>
      </Switch>
    </Box>
  );
}

export {AdminDashboard};