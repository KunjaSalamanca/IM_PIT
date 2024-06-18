import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import supabase from "../Client";

function SLT() {
  const [pharmaceuticalSupply, setPharmaceuticalSupply] = useState([]);
  const [nonSurgicalSupply, setNonSurgicalSupply] = useState([]);
  const [surgicalSupply, setSurgicalSupply] = useState([]);

  useEffect(() => {
    fetchPharmaceuticalSupply();
    fetchNonSurgicalSupply();
    fetchSurgicalSupply();
  }, []);

  async function fetchPharmaceuticalSupply() {
    const { data, error } = await supabase.from("pharmaceutical_supply").select("*");
    if (error) {
      console.error(error);
    } else {
      setPharmaceuticalSupply(data);
    }
  }

  async function fetchNonSurgicalSupply() {
    const { data, error } = await supabase.from("non_surgical_supply").select("*");
    if (error) {
      console.error(error);
    } else {
      setNonSurgicalSupply(data);
    }
  }

  async function fetchSurgicalSupply() {
    const { data, error } = await supabase.from("surgical_supply").select("*");
    if (error) {
      console.error(error);
    } else {
      setSurgicalSupply(data);
    }
  }

  return (
    <Container>
      <h3>Pharmaceutical Supply</h3>
      <Typography >Total: {pharmaceuticalSupply.length}</Typography>
      <h3>Non Surgical Supply</h3>
      <Typography >Total: {nonSurgicalSupply.length}</Typography>
      <h3>Surgical Supply</h3>
      <Typography >Total: {surgicalSupply.length}</Typography>
    </Container>
  );
}

export default SLT;