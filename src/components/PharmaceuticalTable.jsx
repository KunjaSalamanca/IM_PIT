import { Grid, Box, Container, Table, TableHead, TableRow, TableCell, TableBody, Button, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import supabase from "../Client";

function PharmaceuticalSupplyTable() {
    const [pharmaceuticalSupply, setPharmaceuticalSupply] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPharmaceuticalSupply();
    }, []);

    async function fetchPharmaceuticalSupply() {
        try {
            const { data, error } = await supabase
              .from("pharmaceutical_supply")
              .select("*");
            if (error) {
                setError(error);
            } else {
                setPharmaceuticalSupply(data);
            }
        } catch (error) {
            setError(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            const { error } = await supabase
              .from("pharmaceutical_supply")
              .delete()
              .eq("drug_no", id);
            if (error) {
                setError(error);
            } else {
                fetchPharmaceuticalSupply(); // fetch pharmaceutical supply again to update the table
            }
        } catch (error) {
            setError(error);
        }
    };

    return (
        <Container >
            {error && (
                <Typography variant="h6" gutterBottom component="div" color="error">
                    Error: {error.message}
                </Typography>
            )}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Drug No</TableCell>
                        <TableCell>Drug Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Dosage</TableCell>
                        <TableCell>Method of Administration</TableCell>
                        <TableCell>Quantity in Stock</TableCell>
                        <TableCell>Recorder Level</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pharmaceuticalSupply && pharmaceuticalSupply.map((pharmaceutical, index) => (
                        <TableRow key={pharmaceutical.drug_no}>
                            <TableCell>{pharmaceutical.drug_no}</TableCell>
                            <TableCell>{pharmaceutical.drug_name}</TableCell>
                            <TableCell>{pharmaceutical.description || "N/A"}</TableCell>
                            <TableCell>{pharmaceutical.dosage}</TableCell>
                            <TableCell>{pharmaceutical.method_of_administration}</TableCell>
                            <TableCell>{pharmaceutical.quantity_in_stock}</TableCell>
                            <TableCell>{pharmaceutical.recorder_level}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="error" onClick={() => handleDelete(pharmaceutical.drug_no)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
                <Grid item>
                    <Link to='/dashboard'>
                        <Button variant="contained" color="primary" type="submit">
                            Back to Dashboard
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to='/pharmaceutical-supply'>
                        <Button variant="contained" color="primary" type="submit">
                            New Pharmaceutical Supply
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to='/appointments'>
                        <Button variant="contained" color="primary" type="submit">
                            Go to Appointment
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PharmaceuticalSupplyTable;