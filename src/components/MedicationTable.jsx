import { Container, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import supabase from "../Client";

function MedicationsC() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    fetchMedications();
  }, []);

  async function fetchMedications() {
    const { data } = await supabase.from("patient_medication").select("*");
    setMedications(data);
  }

  return (
    <Container maxWidth='false' style={{ height: '100vh'}}>
      <h1>Medications</h1>
      <Typography>Available Medications: {medications.length}</Typography>
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
            <TableCell>Patient No</TableCell>
            <TableCell>Drug No</TableCell>
            <TableCell>Drug Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Dosage</TableCell>
            <TableCell>Method of Administration</TableCell>
            <TableCell>Units per Day</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Finish Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {medications.map((medication, index) => (
            <TableRow key={`row-${index}`}>
              <TableCell>{medication.patient_no}</TableCell>
              <TableCell>{medication.drug_no}</TableCell>
              <TableCell>{medication.drug_name}</TableCell>
              <TableCell>{medication.description}</TableCell>
              <TableCell>{medication.dosage}</TableCell>
              <TableCell>{medication.method_of_administration}</TableCell>
              <TableCell>{medication.units_per_day}</TableCell>
              <TableCell>{medication.start_date}</TableCell>
              <TableCell>{medication.finish_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default MedicationsC;