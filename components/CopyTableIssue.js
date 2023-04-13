// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { useState } from 'react';
import ErrorAlert from './ErrorAlert';
import { getSession } from 'next-auth/react';

export default function CopyTableIssue(props) {
    const theme =  useTheme();
    const router = useRouter();
    
  async function handleIssueRequest({copy_id,book_id}){
    const session = await getSession();
    console.log(session);
      let copyData = {copy_id:copy_id,book_id:book_id,person_id:session.user.id};
      let apiUrlEndpoint = "/api/issue-book-request"
      try{
          const results = await fetch(apiUrlEndpoint,{
              method:"POST",
                  headers:{
                      "Content-type":"application/json"
                  },
                  body:JSON.stringify(copyData)
          })
          const res = await results.json();
          console.log(res,"res");
          if(res.status){
              console.log("Resolved SuccessFully");
              // router.reload(window.location.pathname);
              // router.replace(router.asPath);
              router.reload();
          }else{
              throw Error("Issue Request Rejected");
          }
      }catch(err){
          console.log(err)
          setErrorFlagStatus(true);
      }
  } 
    const [errorFlagStatus,setErrorFlagStatus] = useState(false);

  return (
    <div style={{width:"75%",margin:"0 auto"}}>
    {errorFlagStatus ? <ErrorAlert/>: null }
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{fontSize:20}} align="center">Book_id</TableCell>
            <TableCell sx={{fontSize:20}} align="center">Copy_id</TableCell>
            <TableCell sx={{fontSize:20}} align="center">Status</TableCell>
            <TableCell sx={{fontSize:20}} align="center">Request Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.DATA.map((row) => (
            <TableRow key={row.copy_id} sx={{fontSize:20}}>
              <TableCell sx={{fontSize:18}} align='center'>
                {row.book_id}
              </TableCell>
              {/* <TableCell align="right">{row.book_id}</TableCell> */}
              <TableCell sx={{fontSize:18}} align="center">{row.copy_id}</TableCell>
              <TableCell sx={{fontSize:18}} align="center">{row.status}</TableCell>
              <TableCell sx={{fontSize:18}} align="center"><Button variant='contained' onClick={(e)=>{
                e.preventDefault();
                handleIssueRequest({copy_id:row.copy_id,book_id:row.book_id});
              }} disabled={row.status!=="available"?true:false}>{row.status=="available"?"Request Book":"Book Already Issued"}</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  );
}