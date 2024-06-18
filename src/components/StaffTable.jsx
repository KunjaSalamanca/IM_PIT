import { Container, Table, TableHead, TableRow, TableCell, Grid, TableBody, Link, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import supabase from "../Client";

export default function StaffTable() {
  const [staff, setStaff] = useState([]);

  console.log(staff);

  useEffect(() => {
    fetchStaff();
  }, []);

  async function fetchStaff() {
    const { data, error } = await supabase
    .from("staff")
    .select("*");
    if (error) {
      console.error(error);
    } else {
      setStaff(data);
    }
  }

  const handleDelete = async (staff_no) => {
    try {
      const { error } = await supabase
      .from("staff")
      .delete()
      .eq("staff_no", staff_no);
      if (error) {
        console.error(error);
      } else {
        fetchStaff();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="false" style={{ height: "100vh" }}>
      <h1>Staff</h1>
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
            <TableCell>Staff No</TableCell>
            <TableCell>Staff Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Tel No</TableCell>
            <TableCell>Birthdate</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>NIN</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Current Salary</TableCell>
            <TableCell>Salary Scale</TableCell>
            <TableCell>Work Exp</TableCell>
            <TableCell>Weekly Hours</TableCell>
            <TableCell>Contract Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staff.map((staffMember, index) => (
            <TableRow key={`row-${index}`}>
              <TableCell>{staffMember.staff_no}</TableCell>
              <TableCell>{staffMember.staff_name}</TableCell>
              <TableCell>{staffMember.address}</TableCell>
              <TableCell>{staffMember.tel_no}</TableCell>
              <TableCell>{staffMember.birthdate}</TableCell>
              <TableCell>{staffMember.gender}</TableCell>
              <TableCell>{staffMember.nin}</TableCell>
              <TableCell>{staffMember.position}</TableCell>
              <TableCell>{staffMember.current_salary}</TableCell>
              <TableCell>{staffMember.salary_scale}</TableCell>
              <TableCell>{staffMember.work_exp}</TableCell>
              <TableCell>{staffMember.weekly_hours}</TableCell>
              <TableCell>{staffMember.contract_type}</TableCell>
              <TableCell>
                <Button variant="contained" color="error" onClick={() => handleDelete(staffMember.staff_no)}>
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