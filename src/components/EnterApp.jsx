import * as React from 'react';
import { Box, Grid, Button, Typography, Container } from "@mui/material";
import { Link } from 'react-router-dom';
export default function EnterApp() {
    return (
        <Box component='main' sx={{ flexGrow: 1, height: '100vh', overflow: 'auto', }}>
            <Container maxWidth="lg" sx={{ mt: 15, mb: 12 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={4}>
                    <Link to='/patients'>
                        <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                            New Patient
                        </Button>
                    </Link>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Link to='/inpatients'>
                            <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                                New In Patient
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Link to='/outpatients'>
                        <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                            New Out Patient
                        </Button>
                    </Link>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Link to='/staff'>
                        <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                            New Staff
                        </Button>
                    </Link>    
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Link to='/appointments'>
                        <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                            New Appointment
                        </Button>
                    </Link> 
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Link to='/medication'>
                        <Button variant="contained" sx={{ backgroundColor: "#98FF98", height: 240, width: '100%' }}>
                            New Medication
                        </Button>
                    </Link> 
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}