import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import supabase from "../Client";

export default function StaffL() {
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
  return (
    <Container maxWidth="false" style={{ height: "100vh" }}>
      <h1>Staff</h1>
      <Typography>Number of Staff Members: {staff.length}</Typography>
    </Container>
  );
}