import { Button, Grid, TextField, Container } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../Client";

function Outpatient() {
  const [outPatient, setOutPatient] = useState({
    op_fname: "",
    dp_name: "",
    clinic_number: "",
    location: "",
    total_appointment: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
       .from("outpatient")
       .insert([outPatient])
       .single();
      if (error) {
        console.error(error);
      } else {
        console.log(data);
        setOutPatient({
          op_fname: "",
          dp_name: "",
          clinic_number: "",
          location: "",
          total_appointment: 0,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setOutPatient({...outPatient, [event.target.name]: event.target.value });
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
                label="First Name"
                name="op_fname"
                value={outPatient.op_fname}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Doctor's Name"
                name="dp_name"
                value={outPatient.dp_name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Clinic Number"
                name="clinic_number"
                value={outPatient.clinic_number}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Location"
                name="location"
                value={outPatient.location}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Total Appointments"
                name="total_appointment"
                value={outPatient.total_appointment}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Add Outpatient
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default Outpatient;