import { Container, Table, Button, TableHead, TableRow, TableCell, Grid, TableBody, Link, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import supabase from "../Client";

export default function AppTable() {
    const [appointments, setAppointments] = useState([]);

    console.log(appointments);

    useEffect(() => {
        fetchAppointments();
    }, []);

    async function fetchAppointments() {
        const { data, error } = await supabase
           .from("patient_appointment") // Table name should match the actual table name in the database
           .select("*");
        if (error) {
            console.error(error);
        } else {
            setAppointments(data);
        }
    }

    const handleDelete = async (id) => {
        try {
            const { error } = await supabase
               .from("patient_appointment") 
               .delete()
               .eq("appointment_no", id);
            if (error) {
                console.error(error);
            } else {
                fetchAppointments();
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Container>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Appointment Number</TableCell>
                        <TableCell>Patient Number</TableCell>
                        <TableCell>Staff Number</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Room</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((appointment, index) => (
                        <TableRow key={`row-${index}`}>
                            <TableCell>{appointment.appointment_no}</TableCell>
                            <TableCell>{appointment.patient_no}</TableCell>
                            <TableCell>{appointment.staff_no}</TableCell>
                            <TableCell>{appointment.appointment_date}</TableCell>
                            <TableCell>{appointment.appointment_time}</TableCell>
                            <TableCell>{appointment.room}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="error" onClick={() => handleDelete(appointment.appointment_no)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}