import { Container, Table, TableHead, TableRow, TableCell, Grid, TableBody, Link, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import supabase from "../Client";

export default function WardTable() {
  const [ward, setWard] = useState([]);

  console.log(ward);

  useEffect(() => {
    fetchWard();
  }, []);

  async function fetchWard() {
    const { data, error } = await supabase
    .from("Ward")
    .select("*");
    if (error) {
      console.error(error);
    } else {
      setWard(data);
    }
  }

  const handleDelete = async (ward_no) => {
    try {
      const { error } = await supabase
      .from("Ward")
      .delete()
      .eq("ward_no", ward_no);
      if (error) {
        console.error(error);
      } else {
        fetchWard();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="false" style={{ height: "100vh" }}>
      <h1>Ward</h1>
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
            <TableCell>Ward No</TableCell>
            <TableCell>Staff No</TableCell>
            <TableCell>Ward Name</TableCell>
            <TableCell>Ward Location</TableCell>
            <TableCell>Tel No</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ward.map((wardMember, index) => (
            <TableRow key={`row-${index}`}>
              <TableCell>{wardMember.ward_no}</TableCell>
              <TableCell>{wardMember.staff_no}</TableCell>
              <TableCell>{wardMember.ward_name}</TableCell>
              <TableCell>{wardMember.ward_location}</TableCell>
              <TableCell>{wardMember.tel_no}</TableCell>
              <TableCell>
                <Button variant="contained" color="error" onClick={() => handleDelete(wardMember.ward_no)}>
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