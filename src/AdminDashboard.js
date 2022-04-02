import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import FilterIcon from '@mui/icons-material/Filter';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';


const drawerWidth = 240;

  function AdminDashboard() {

    const list1 = [
      {
        text:'Component',
        icon: <SettingsIcon />
      },
      {
        text:'Utilities',
        icon: <BuildIcon style={{ transform: 'rotate(90deg)' }}/>
      }
    ];

    const list2 = [
      {
        text:'Pages',
        icon: <FolderRoundedIcon />
      },
      {
        text:'Charts',
        icon: <FilterIcon />
      },
      {
        text:'Tables',
        icon: <WindowRoundedIcon />
      }
    ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
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
      >
        
        <Toolbar />
        <List>
        <ListItem button key={'dashboard'}>
              <ListItemIcon>
                <SpeedIcon />
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemText secondary={'INTERFACE'}  variant="text" ></ListItemText>
          {list1.map((e) => (
            <ListItem button key={e.text}>
              <ListItemIcon>
                {e.icon}
              </ListItemIcon>
              <ListItemText primary={e.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
        <ListItemText secondary={'ADDONS'}  variant="text" ></ListItemText>
          {list2.map((e) => (
            <ListItem button key={e.text}>
              <ListItemIcon>
                {e.icon}
              </ListItemIcon>
              <ListItemText primary={e.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

export {AdminDashboard};