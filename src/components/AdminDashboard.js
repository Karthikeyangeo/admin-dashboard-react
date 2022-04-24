import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SpeedIcon from '@mui/icons-material/Speed';

const drawerWidth = 240;



function AdminDashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const secondaryText = {
    color: 'black'
  }

  // format for changing color in Material UI Icons
  const iconColor ={
    color: 'black',
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
  
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
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
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}

AdminDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export {AdminDashboard};