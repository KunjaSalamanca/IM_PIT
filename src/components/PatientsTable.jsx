import { Button, Grid, Box, Container, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Typography, Collapse } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../Client";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function PatientsTable() {
    const [patients, setPatients] = useState([]);
    const [open, setOpen] = useState({});

    console.log(patients);

    useEffect(() => {
        fetchPatients();
    }, []);

    async function fetchPatients() {
        const { data } = await supabase
          .from("patient")
          .select("*");
        setPatients(data);
    }
    const handleDelete = async (id) => {
        try {
            const { error } = await supabase
              .from("patient")
              .delete()
              .eq("patient_no", id);
            if (error) {
                console.error(error);
            } else {
                fetchPatients(); // fetch patients again to update the table
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleOpen = (id) => {
        setOpen((prevOpen) => ({...prevOpen, [id]:!prevOpen[id] }));
    };

    return (
        <Container maxWidth="false" style={{ height: "100vh" }}>
      <h1>Patients</h1>
      <Table style={{
          backgroundColor: '#98FF98',
          margin: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1500px',borderRadius: '10px', border: 'none'
      }}>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Patient Number</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Telephone Number</TableCell>
                        <TableCell>Date of Birth</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Marital Status</TableCell>
                        <TableCell>Date Registered</TableCell>
                        <TableCell>Next of Kin Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {patients.map((patient, index) => (
                        <React.Fragment key={patient.patient_no}>
                            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                                <TableCell>
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        onClick={() => handleOpen(patient.patient_no)}
                                    >
                                        {open[patient.patient_no]? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell>{patient.patient_no}</TableCell>
                                <TableCell>{patient.first_name}</TableCell>
                                <TableCell>{patient.last_name}</TableCell>
                                <TableCell>{patient.address}</TableCell>
                                <TableCell>{patient.tel_number}</TableCell>
                                <TableCell>{patient.birthdate}</TableCell>
                                <TableCell>{patient.gender}</TableCell>
                                <TableCell>{patient.marital_status}</TableCell>
                                <TableCell>{patient.date_registered}</TableCell>
                                <TableCell>{patient.nok_name}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="error" onClick={() => handleDelete(patient.patient_no)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
                                    <Collapse in={open[patient.patient_no]} timeout="auto" unmountOnExit>
                                        <Box sx={{ margin: 1 }}>
                                        <Typography variant="h6" gutterBottom component="div">
                                                Patient Details
                                            </Typography>
                                        </Box>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
}

export default PatientsTable;