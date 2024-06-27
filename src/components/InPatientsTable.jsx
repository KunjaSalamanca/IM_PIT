import { Container, Table, Button, TableHead, TableRow, TableCell, Grid, TableBody, Link, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import supabase from "../Client";

export default function InPatientsTable() {
  const [inPatients, setInPatients] = useState([]);

  console.log(inPatients);

  useEffect(() => {
    fetchInPatients();
  }, []);

  async function fetchInPatients() {
    const { data, error } = await supabase
      .from("in_patients") // Table name should match the actual table name in the database
      .select("*");
    if (error) {
      console.error(error);
    } else {
      setInPatients(data);
    }
  }

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from("in_patients") 
        .delete()
        .eq("in_patient_number", id);
      if (error) {
        console.error(error);
      } else {
        fetchInPatients();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container maxWidth="false" style={{ height: "100vh" }}>
      <h1>In Patients</h1>
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
            <TableCell>In Patient Number</TableCell>
            <TableCell>Ward Number</TableCell>
            <TableCell>Bed Number</TableCell>
            <TableCell>Date Placed on Waiting List</TableCell>
            <TableCell>Expected Duration of Stay</TableCell>
            <TableCell>Date Placed in Ward</TableCell>
            <TableCell>Date Expected to Leave Ward</TableCell>
            <TableCell>Actual Date Left Ward</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inPatients.map((inPatient, index) => (
            <TableRow key={`row-${index}`}>
              <TableCell>{inPatient.in_patient_number}</TableCell>
              <TableCell>{inPatient.ward_no}</TableCell>
              <TableCell>{inPatient.bed_number}</TableCell>
              <TableCell>{inPatient.date_placed_on_waiting_list}</TableCell>
              <TableCell>{inPatient.expected_duration_of_stay}</TableCell>
              <TableCell>{inPatient.date_placed_in_ward}</TableCell>
              <TableCell>{inPatient.date_expected_to_leave_ward}</TableCell>
              <TableCell>{inPatient.actual_date_left_ward}</TableCell>
              <TableCell>
                <Button variant="contained" color="error" onClick={() => handleDelete(inPatient.In_Patient_Number)}>
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