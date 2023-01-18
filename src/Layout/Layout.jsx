import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link, useLocation } from 'react-router-dom';
import { Box, Divider } from '@mui/material';

const Layout = ({ children }) => {
    const drawerWidth = 240;
    const tabs = [
        { name: "Home", path: "/", icon: <HomeIcon /> },
        { name: "Users", path: "/users", icon: <PeopleAltIcon /> },
        { name: "Products", path: "/products", icon: <InventoryIcon /> },
        { name: "SignOut", path: "#", icon: <ExitToAppIcon /> }
    ]

    const location = useLocation();
    return (
        <Box sx={{ display: 'flex' }}>
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
                <Toolbar>
                    <Typography>LOGO</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {tabs.slice(0, -1).map((tab) => (
                        <ListItem key={tab.name} disablePadding style={location.pathname === tab.path ? {
                            backgroundColor: "#00000036"
                        } : {}}>
                            <Link to={tab.path}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {tab.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={tab.name} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {tabs.slice(-1).map((tab) => (
                        <ListItem key={tab.name} disablePadding>
                            <Link to={tab.path}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {tab.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={tab.name} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.default' }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default Layout