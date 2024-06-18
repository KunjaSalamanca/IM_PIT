import { Button, Grid, TextField, Container } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../Client";

function AddStaff() {
  const [staff, setStaff] = useState({
    staff_no: "",
    staff_name: "",
    address: "",
    tel_no: "",
    birthdate: "",
    gender: "",
    NIN: "",
    position: "",
    current_salary: 0,
    salary_scale: "",
    work_exp: 0,
    weekly_hours: 0,
    contract_type: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
      .from("Staff")
      .insert([staff])
      .single();
      if (error) {
        console.error(error);
      } else {
        console.log(data);
        setStaff({
          staff_no: "",
          staff_name: "",
          address: "",
          tel_no: "",
          birthdate: "",
          gender: "",
          NIN: "",
          position: "",
          current_salary: 0,
          salary_scale: "",
          work_exp: 0,
          weekly_hours: 0,
          contract_type: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setStaff({...staff, [event.target.name]: event.target.value });
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
                label="Staff No"
                name="staff_no"
                value={staff.staff_no}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Staff Name"
                name="staff_name"
                value={staff.staff_name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Address"
                name="address"
                value={staff.address}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Tel No"
                name="tel_no"
                value={staff.tel_no}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Birthdate"
                name="birthdate"
                value={staff.birthdate}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Gender"
                name="gender"
                value={staff.gender}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="NIN"
                name="nin"
                value={staff.nin}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Position"
                name="position"
                value={staff.position}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Current Salary"
                name="current_salary"
                value={staff.current_salary}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Salary Scale"
                name="salary_scale"
                value={staff.salary_scale}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Work Exp"
                name="work_exp"
                value={staff.work_exp}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Weekly Hours"
                name="weekly_hours"
                value={staff.weekly_hours}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Contract Type"
                name="contract_type"
                value={staff.contract_type}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit"variant="contained" color="primary">
                Add Staff
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default AddStaff;