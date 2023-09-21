import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar(props) {

  const formatDateHandler  = (date) => {
    const dateString = date.$d;
     const dateObject = new Date(dateString);

const day = String(dateObject.getDate()).padStart(2, '0');
const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Month is zero-based
const year = dateObject.getFullYear();

const formattedDate = `${day}-${month}-${year}`;
// console.log(formattedDate); 

props.onDateChange(formattedDate);
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar onChange={formatDateHandler}
      sx={{boxShadow:"0px 0px 10px 10px gray", height:'100%',marginTop:'30px',borderRadius:'12px',background:'#FFFFFF'}} />
    </LocalizationProvider>
  );
}