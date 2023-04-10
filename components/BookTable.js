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
            <TableCell sx={{fontSize:25}} align="center">Book_id</TableCell>
            <TableCell sx={{fontSize:25}} align="center">Name</TableCell>
            <TableCell sx={{fontSize:25}} align="center">Author</TableCell>
            <TableCell sx={{fontSize:25}} align="center">Publisher</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.DATA.map((row) => (
            <TableRow
            onClick={()=>{router.push(`/book-copy/${row.book_id}`)}}
              key={row.book_id}
              sx={{fontSize:20}}
            >
              <TableCell sx={{fontSize:20}} align='center'>
                {row.book_id}
              </TableCell>
              {/* <TableCell align="right">{row.book_id}</TableCell> */}
              <TableCell sx={{fontSize:20}} align="center">{row.name}</TableCell>
              <TableCell sx={{fontSize:20}} align="center">{row.author}</TableCell>
              <TableCell sx={{fontSize:20}} align="center">{row.publisher}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}