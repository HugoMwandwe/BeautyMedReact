// src/components/BookingForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const BookingForm = ({ title, serviceType }) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(`Your ${serviceType} appointment is confirmed for ${date} at ${time}`);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Book {title} Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Preferred Date"
          type="date"
          variant="outlined"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
          sx={{ mt: 2 }}
          required
        />
        <TextField
          label="Preferred Time"
          type="time"
          variant="outlined"
          fullWidth
          value={time}
          onChange={(e) => setTime(e.target.value)}
          sx={{ mt: 2 }}
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }} fullWidth>
          Confirm Appointment
        </Button>
      </form>

      {confirmation && (
        <Typography variant="h6" sx={{ mt: 3, color: 'green' }}>
          {confirmation}
        </Typography>
      )}
    </Box>
  );
};

export default BookingForm;
