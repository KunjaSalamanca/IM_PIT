import { Button, Grid, TextField, Container } from "@mui/material";
import { useState } from "react";
import supabase from "../Client";

function NextOfKin() {
  const [nextOfKin, setNextOfKin] = useState({
    nok_name: "",
    nok_relationship: "",
    address: "",
    tel_no: "",
    nok_id: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
        .from("next_of_kin")
        .insert([nextOfKin])
        .single();
      if (error) {
        console.error(error);
      } else {
        console.log(data);
        setNextOfKin({
          nok_name: "",
          nok_relationship: "",
          address: "",
          tel_no: "",
          nok_id: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setNextOfKin({ ...nextOfKin, [event.target.name]: event.target.value });
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
                label="Name"
                name="nok_name"
                value={nextOfKin.nok_name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Relationship"
                name="nok_relationship"
                value={nextOfKin.nok_relationship}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Address"
                name="address"
                value={nextOfKin.address}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Telephone Number"
                name="tel_no"
                value={nextOfKin.tel_no}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Next of Kin ID"
                name="nok_id"
                value={nextOfKin.nok_id}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Add Next of Kin
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default NextOfKin;