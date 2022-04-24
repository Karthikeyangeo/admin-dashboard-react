import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
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
import { makeStyles } from "@material-ui/core/styles";


const drawerWidth = 240;


  function PermanentDrawer(props) {
    const history = useHistory();
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

    // const customBgColor = {color:'#1976D2'}

    const useStyles = makeStyles({
      
      paper: {
        color: '#1976D2'
      }
    });

    const classes = useStyles();
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
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        
      >
        <AdminAppBar />

      </AppBar>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          classes={{ paper: classes.paper }}
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
          classes={{ paper: classes.paper }}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
    </Box>
  );
}
PermanentDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export {PermanentDrawer};