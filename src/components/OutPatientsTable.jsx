import { Container, Table, TableHead, TableRow, TableCell, Grid, TableBody, Link, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import supabase from "../Client";

export default function OutPatientsTable() {
  const [outPatients, setOutPatients] = useState([]);

  console.log(outPatients);

  useEffect(() => {
    fetchOutPatients();
  }, []);

  async function fetchOutPatients() {
    const { data, error } = await supabase
     .from("outpatient")
     .select("*");
    if (error) {
      console.error(error);
    } else {
      setOutPatients(data);
    }
  }

  const handleDelete = async (clinic_number) => {
    try {
      const { error } = await supabase
       .from("outpatient")
       .delete()
       .eq("clinic_number", clinic_number);
      if (error) {
        console.error(error);
      } else {
        fetchOutPatients();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="false" style={{ height: "100vh" }}>
      <h1>Outpatients</h1>
      <Table style={{
          backgroundColor: '#98FF98',
          margin: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1000px',borderRadius: '10px', border: 'none'
      }}>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Doctor's Name</TableCell>
            <TableCell>Clinic Number</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Total Appointments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {outPatients.map((outPatient, index) => (
            <TableRow key={`row-${index}`}>
              <TableCell>{outPatient.op_fname}</TableCell>
              <TableCell>{outPatient.dp_name}</TableCell>
              <TableCell>{outPatient.clinic_number}</TableCell>
              <TableCell>{outPatient.location}</TableCell>
              <TableCell>{outPatient.total_appointment}</TableCell>
              <TableCell>
                <Button variant="contained" color="error" onClick={() => handleDelete(outPatient.clinic_number)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}