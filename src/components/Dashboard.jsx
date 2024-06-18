import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import StaffL from './StaffLength';
import WardsC from './WardsTable';
import AppTable from './AppoinmentsTable';
import SLT from './SupplyLength';

export default function Dashboard() {

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Toolbar sx={{ backgroundColor: "#98FF98", pr: '40px', display: 'flex', justifyContent: 'pace-between' }}>
                <Button
                    variant="h6"
                    component="h1"
                    sx={{ flexGrow: 1, fontSize: '2' }}
                >
                    Dashboard
                </Button>
                <Link to='/enterapp'>
                    <Button color="inherit">Appointments</Button>
                </Link>
                <Link to='/managet'>
                    <Button color="inherit">Manage</Button>
                </Link>
                <Link to='/supplytable'>
                    <Button color="inherit">Supplies</Button>
                </Link>
                <Link to='/login'>
                    <Button color="inherit">Logout</Button>
                </Link>
            </Toolbar>
            <Box component='main' sx={{ flexGrow: 1, height: '100vh', overflow: 'auto', }}>
                <Container maxWidth="lg" sx={{ mt: 15, mb: 12 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={4}>
                            <Paper sx={{ backgroundColor: "#98FF98", p: 2, display: 'flex', flexDirection: 'column', height: 240, }}>
                                <StaffL />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper sx={{ backgroundColor: "#98FF98", p: 2, display: 'flex', flexDirection: 'column', height: 240, }}>
                                <WardsC />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper sx={{ backgroundColor: "#98FF98", p: 2, display: 'flex', flexDirection: 'column', height: 240, }}>
                                <SLT/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ backgroundColor: "#98FF98", p: 2, display: 'flex', flexDirection: 'column' }}>
                                <AppTable />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>

    );
}