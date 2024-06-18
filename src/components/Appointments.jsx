import { Button, Grid, TextField, Container} from "@mui/material";
import { useState } from "react";
import supabase from "../Client";

function Appointments() {
    const [appointment, setAppointment] = useState({
        patient_no: "",
        staff_no: "",
        appointment_date: "",
        appointment_time: "",
        room: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data, error } = await supabase
                .from("patient_appointment")
                .insert([appointment])
                .single();
            if (error) {
                console.error(error);
            } else {
                console.log(data);
                setAppointment({
                    patient_no: "",
                    staff_no: "",
                    appointment_date: "",
                    appointment_time: "",
                    room: "",
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setAppointment({ ...appointment, [event.target.name]: event.target.value });
    };
    return (
        <Container maxWidth='false' style={{ height: '100vh'}} >
            <Grid container xs={12} style={{
            backgroundColor: '#98FF98',
            margin: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1000px',borderRadius: '10px', border: 'none'
        }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Patient Number"
                                name="patient_no"
                                value={appointment.patient_no}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Staff Number"
                                name="staff_no"
                                value={appointment.staff_no}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Date"
                                type="date"
                                name="appointment_date"
                                value={appointment.appointment_date}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Time"
                                name="appointment_time"
                                value={appointment.appointment_time}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Room"
                                name="room"
                                value={appointment.room}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Add Appointment
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Container>
    );
}

export default Appointments;