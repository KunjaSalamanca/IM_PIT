import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import mainLists from '../components/NavList';
import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';


export default function Header() {

    return (
        <Box>
            <AppBar position="absolute" open={open}>
                <Toolbar sx={{ backgroundColor: "#98FF98", pr: '40px', display: 'flex', justifyContent: 'pace-between' }}>
                    <Link to='/enterapp'>
                        <Button color="inherit">Appointment</Button>
                    </Link>
                    <Link to='/managet'>
                        <Button color="inherit">Manage</Button>
                    </Link>
                    <Button
                        variant="h6"
                        component="h1"
                        sx={{ flexGrow: 1 }}
                    >
                        WellMeadows Hospital
                    </Button>
                    <Link to='/dashboard'>
                        <Button color="inherit">Dashbaord</Button>
                    </Link>
                    <Link to='/login'>
                    <Button color="inherit">Logout</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}