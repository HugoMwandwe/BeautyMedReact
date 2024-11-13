// src/components/AppointmentList.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const AppointmentList = ({ appointments }) => {
  return (
    <List>
      {appointments.map((appointment, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`Appointment: ${appointment.name} at ${appointment.time} on ${appointment.date}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default AppointmentList;
