import * as React from 'react';
import { Box, Grid, Button, Container } from "@mui/material";
import { Link } from 'react-router-dom';


export default function ManageT() {
    return (
        <Box component='main' sx={{ flexGrow: 1, height: '100vh', overflow: 'auto', }}>
            <Container maxWidth="lg" sx={{ mt: 15, mb: 12 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={4}>
                    <Link to='/ptable'>
                        <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                            Check Patients
                        </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Link to='/iptable'>
                            <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                                Check In Patient
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Link to='/optable'>
                        <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                            Check Out Patient
                        </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Link to='/stable'>
                        <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                            Check Staff
                        </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Link to='/dashboard'>
                        <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                            Check Appointment
                        </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Link to='/mtable'>
                        <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                            Check Medications
                        </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}