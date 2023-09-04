import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar sx={{boxShadow:"0px 0px 10px 10px gray", height:'90%',marginTop:'10px',borderRadius:'12px',background:'#FFFFFF'}} />
    </LocalizationProvider>
  );
}