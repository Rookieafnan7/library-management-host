import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';


export default function BasicTable(props) {
    const theme =  useTheme();
    const router = useRouter();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{fontSize:20}} align="center">Person_id</TableCell>
            <TableCell sx={{fontSize:20}} align="center">Username</TableCell>
            <TableCell sx={{fontSize:20}} align="center">Name</TableCell>
            <TableCell sx={{fontSize:20}} align="center">Phone Number</TableCell>
            <TableCell sx={{fontSize:20}} align="center">Email</TableCell>
            <TableCell sx={{fontSize:20}} align="center">Start Date</TableCell>
            <TableCell sx={{fontSize:20}} align="center">Email</TableCell>

            
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.DATA.map((row) => (
            <TableRow key={row.person_id}>
              <TableCell sx={{fontSize:18}} align='center'>
                {row.person_id}
              </TableCell>
              {/* <TableCell align="right">{row.book_id}</TableCell> */}
              <TableCell sx={{fontSize:20}} align="center">{row.username}</TableCell>
              <TableCell sx={{fontSize:20}} align="center">{row.name}</TableCell>
              <TableCell sx={{fontSize:20}} align="center">{row.phone_number}</TableCell>
              <TableCell sx={{fontSize:20}} align="center">{row.email}</TableCell>
              <TableCell sx={{fontSize:20}} align="center">{row.start_date}</TableCell>
              <TableCell sx={{fontSize:20}} align="center">{row.email}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}