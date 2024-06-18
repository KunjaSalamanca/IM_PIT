import { Button, Grid, TextField, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../Client";

function Patients() {
    const [patients, setPatients] = useState([]);
    const [patient, setPatient] = useState({
        patient_no: "",
        first_name: "",
        last_name: "",
        address: "",
        tel_number: "",
        birthdate: "",
        gender: "",
        marital_status: "",
        date_registered: "",
        nok_name: "",
    });

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data, error } = await supabase
               .from("patient")
               .insert([patient])
               .single();
            if (error) {
                console.error(error);
            } else {
                console.log(data);
                setPatient({
                    patient_no: "",
                    first_name: "",
                    last_name: "",
                    address: "",
                    tel_number: "",
                    birthdate: "",
                    gender: "",
                    marital_status: "",
                    date_registered: "",
                    nok_name: "",
                });
                fetchPatients(); // fetch patients again to update the table
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setPatient({...patient, [event.target.name]: event.target.value });
    };

    return (
        <Container maxWidth="false" style={{ height: "100vh" }}>
      <Grid container xs={12} style={{
          backgroundColor: '#98FF98',
          margin: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1000px',borderRadius: '10px', border: 'none'
      }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Patient Number"
                                name="patient_no"
                                value={patient.patient_no}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="First Name"
                                name="first_name"
                                value={patient.first_name}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Last Name"
                                name="last_name"
                                value={patient.last_name}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Address"
                                name="address"
                                value={patient.address}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Telephone Number"
                                name="tel_number"
                                value={patient.tel_number}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Date of Birth"
                                name="birthdate"
                                value={patient.birthdate}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Gender"
                                name="gender"
                                value={patient.gender}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Marital Status"
                                name="marital_status"
                                value={patient.marital_status}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Date Registered"
                                name="date_registered"
                                value={patient.date_registered}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Next of Kin Name"
                                name="nok_name"
                                value={patient.nok_name}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Add Patient
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Container>
    );
}

export default Patients;