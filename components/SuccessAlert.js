import * as React from 'react';
import Alert from '@mui/material/Alert';


export default function SuccessAlert(props) {
  return (
    <Alert severity='success'>{props.message?`${props.message}`:"Insert Successful"}</Alert>
  );
}