import { Button, Grid, TextField, Container } from "@mui/material";
import { useState } from "react";
import supabase from "../Client";

function InPatients() {
  const [inPatient, setInPatient] = useState({
    in_patient_number: "",
    ward_no: "",
    bed_number: "",
    date_placed_on_waiting_list: "",
    expected_duration_of_stay: "",
    date_placed_in_ward: "",
    date_expected_to_leave_ward: "",
    actual_date_left_ward: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
       .from("in_patients")
       .insert([inPatient])
       .single();
      if (error) {
        console.error(error);
      } else {
        console.log(data);
        setInPatient({
          in_patient_number: "",
          ward_no: "",
          bed_number: "",
          date_placed_on_waiting_list: "",
          expected_duration_of_stay: "",
          date_placed_in_ward: "",
          date_expected_to_leave_ward: "",
          actual_date_left_ward: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setInPatient({...inPatient, [event.target.name]: event.target.value });
  };

  return (
    <Container maxWidth="false" style={{ height: "100vh" }}>
      <Grid
        container
        xs={12}
        style={{
          backgroundColor: "#98FF98",
          margin: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1500px",
          borderRadius: "10px",
          border: "none",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="In Patient Number"
                name="in_patient_number"
                value={inPatient.in_patient_number}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Ward Number"
                name="ward_no"
                value={inPatient.ward_no}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Bed Number"
                name="bed_number"
                value={inPatient.bed_number}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date Placed on Waiting List"
                type="date"
                name="date_placed_on_waiting_list"
                value={inPatient.date_placed_on_waiting_list}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Expected Duration of Stay"
                name="expected_duration_of_stay"
                value={inPatient.expected_duration_of_stay}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date Placed in Ward"
                type="date"
                name="date_placed_in_ward"
                value={inPatient.date_placed_in_ward}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date Expected to Leave Ward"
                type="date"
                name="date_expected_to_leave_ward"
                value={inPatient.date_expected_to_leave_ward}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Actual Date Left Ward"
                type="date"
                name="actual_date_left_ward"
                value={inPatient.actual_date_left_ward}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Add In Patient
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default InPatients;