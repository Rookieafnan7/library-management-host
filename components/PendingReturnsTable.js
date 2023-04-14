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



export default function PendingReturnsTable(props) {
    const [errorFlagStatus,setErrorFlagStatus] = useState(false);
    const theme =  useTheme();
    const router = useRouter();
    async function handleReturn(data){
        console.log(data,"data clicked")
        try{
            const response = await fetch("/api/return-book",{
                method:'POST',
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            });
            const res = await response.json();
            if(res.status){
                router.reload();
                console.log("Successful");
            }else{
                console.log("Something Went Wrong");
                throw Error("Something Went Wrong");
            }
        }catch(err){
            setErrorFlagStatus(true);
        }
    }
  return (
    <TableContainer component={Paper}>
    {errorFlagStatus?<ErrorAlert/>:null}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{fontSize:25}} align="center" >Book_id</TableCell>
            <TableCell sx={{fontSize:25}} align="center">Copy_id</TableCell>

            <TableCell sx={{fontSize:25}} align="center">Book Name</TableCell>
            <TableCell sx={{fontSize:25}} align="center">Person Name</TableCell>
            <TableCell sx={{fontSize:25}} align="center">Person Id</TableCell>
            <TableCell sx={{fontSize:25}} align="center">Book Author</TableCell>
            <TableCell sx={{fontSize:25}} align="center">Time assigned to Return</TableCell>
            <TableCell sx={{fontSize:25}} align="center">Options</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.DATA.map((row) => (
            <TableRow
              key={row.issue_id}
              sx={{fontSize:20}}
            >
              <TableCell sx={{fontSize:20}} align='center'>
                {row.book_id}
              </TableCell>
              {/* <TableCell align="right">{row.book_id}</TableCell> */}
              <TableCell sx={{fontSize:18}} align="center">{row.copy_id}</TableCell>
              <TableCell sx={{fontSize:18}} align="center">{row.book_name}</TableCell>
              <TableCell sx={{fontSize:18}} align="center">{row.person_name}</TableCell>
              <TableCell sx={{fontSize:18}} align="center">{row.person_id}</TableCell>
              <TableCell sx={{fontSize:18}} align="center">{row.author}</TableCell>
              <TableCell sx={{fontSize:18}} align="center">{row.return_time}</TableCell>
              <TableCell sx={{fontSize:18}} align="center"><Button variant='contained' onClick={(e)=>{
                e.preventDefault();
                handleReturn({book_id:row.book_id,copy_id:row.copy_id,issue_id:row.issue_id});
              }}>Return Book</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}