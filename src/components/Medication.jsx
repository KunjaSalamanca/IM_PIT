import { Button, Grid, TextField, Container } from "@mui/material";
import { useState } from "react";
import supabase from "../Client";

function AddMedication() {
  const [medication, setMedication] = useState({
    patient_no: "",
    drug_no: "",
    drug_name: "",
    description: "",
    dosage: "",
    method_of_administration: "",
    units_per_day: "",
    start_date: "",
    finish_date: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
       .from("patient_medication")
       .insert([medication])
       .single();
      if (error) {
        console.error(error);
      } else {
        console.log(data);
        setMedication({
          patient_no: "",
          drug_no: "",
          drug_name: "",
          description: "",
          dosage: "",
          method_of_administration: "",
          units_per_day: "",
          start_date: "",
          finish_date: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setMedication({...medication, [event.target.name]: event.target.value });
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
                label="Patient No"
                name="patient_no"
                value={medication.patient_no}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Drug No"
                name="drug_no"
                value={medication.drug_no}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Drug Name"
                name="drug_name"
                value={medication.drug_name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Description"
                name="description"
                value={medication.description}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Dosage"
                name="dosage"
                value={medication.dosage}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Method of Administration"
                name="method_of_administration"
                value={medication.method_of_administration}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Units per Day"
                name="units_per_day"
                value={medication.units_per_day}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Start Date"
                name="start_date"
                value={medication.start_date}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Finish Date"
                name="finish_date"
                value={medication.finish_date}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Add Medication
          </Button>
        </form>
      </Grid>
    </Container>
  );
}

export default AddMedication;