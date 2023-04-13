import * as React from 'react';
import Alert from '@mui/material/Alert';


export default function ErrorAlert(props) {
  return (
    <Alert severity='error' onClose={() => {
      if(props.closeHandle){
        props.closeHandle(false);
      }
    }}>{props.message?`${props.message}`:"Error Occured, Please Try Again"}</Alert>
  );
}