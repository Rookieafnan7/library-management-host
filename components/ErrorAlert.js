import * as React from 'react';
import Alert from '@mui/material/Alert';


export default function ActionAlerts() {
  return (
    <Alert severity='error' onClose={() => {}}>Error Occured, Please Try Again</Alert>
  );
}