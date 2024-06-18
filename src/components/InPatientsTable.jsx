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
      .from("In_Patients") // Table name should match the actual table name in the database
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
        .from("In_Patients") 
        .delete()
        .eq("In_Patient_Number", id);
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
              <TableCell>{inPatient.In_Patient_Number}</TableCell>
              <TableCell>{inPatient.ward_no}</TableCell>
              <TableCell>{inPatient.Bed_Number}</TableCell>
              <TableCell>{inPatient.Date_Placed_on_Waiting_List}</TableCell>
              <TableCell>{inPatient.Expected_Duration_of_Stay}</TableCell>
              <TableCell>{inPatient.Date_Placed_in_Ward}</TableCell>
              <TableCell>{inPatient.Date_Expected_to_Leave_Ward}</TableCell>
              <TableCell>{inPatient.Actual_Date_Left_Ward}</TableCell>
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