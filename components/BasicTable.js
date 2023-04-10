/* eslint-disable react-hooks/exhaustive-deps */
import React,{useMemo, useState} from 'react'
import { useEffect } from 'react';
import {useTable} from 'react-table'
// import MOCK_DATA from './MOCK_DATA.json'
// import {COLUMNS} from './columns'
// import './table.css'
import idToString from '../lib/idToString';
// import subBasicTable

export default function BasicTable(props){
    const [status,setStatus] = useState(false);
    useEffect(()=>{
        if(props.DATA && props.COLUMNS){
            setStatus((prev)=>!prev)
            console.log(status);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.DATA,props.COLUMNS]);
    // console.log(props,"BASIC TABLE");
    const DATA = idToString(props.DATA);
    // console.log(DATA);
    const columns = useState(useMemo(() => props.COLUMNS,[]));
    const data = useMemo(() => props.DATA,[]);

    
    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return(
        <>
        {/* {props.DATA.map((value)=>{
            console.log(value.book_id)
            return <div key={value.book_id}>{value.book_id}</div>
        })} */}

        {status?<div>loading</div>:<div>load complete</div>}
        </>
    //       <table {...getTableProps()}>
    //     <thead>
    //         {
    //             headerGroups.map((headerGroups) =>(
    //                 <tr{...headerGroups.getHeaderGroupProps()}>
    //                 {headerGroups.headers.map((column) => (
    //                  <th {...column.getHeaderProps()}>  
    //                  {column.render('Header')}
    //                  </th>
    //                     ))
    //                 }
    //                    <th>
    //                     </th> 
    //                 </tr>
    //             ))
    //         }
    //         <tr> 
    //             <th></th>
    //         </tr>
    //     </thead>
    //     <tbody {...getTableBodyProps()}>
    //         {rows.map((row) => {
    //                 prepareRow(row)
    //                 return(
    //                  <tr {...row.getRowProps()}>
    //                     {row.cells.map((cell) => {
    //                         return <td{...cell.getCellProps()} >
    //                         {cell.render('Cell')}
    //                         </td>
    //                       })}
    //                  </tr>
    //                 )
    //             })}
    //     </tbody>
    // </table> 
    )
}