/* eslint-disable @next/next/no-img-element */
import { signOut } from 'next-auth/react';
import { COLUMNS } from '../column-format/columns-book';
import Image from 'next/image';
import styles from '../src/styles/Sidebar.module.css';
import BasicTable from './BasicTable';
import SidebarButton from './SidebarButton';
import { useState } from "react"
import BookTable from "./BookTable";
import { Button } from '@mui/material';
import SearchBar from './SearchBar';
import CopyTableIssue from './CopyTableIssue';
import BookList from './BookList/BookList';
import AddBook from '../components/AddBook';
import PendingReturnsTable from './PendingReturnsTable';
export default function Sidebar(props) {
  // console.log(props);
   const [toggleStatus,setToggleStatus] = useState(false);
   const [toggleClassName,setToggleClassName] = useState(`${styles.toggle}`);
   const [mainClassName,setMainClassName] = useState(`${styles.main}`);
   const [profileDisplay,setProfileDisplay] = useState({display:false,style:{display:'none',textAlign:'center'}});
   const [searchInput,setSearchInput] = useState("");
    async function toggle(){
        
        setToggleStatus((prev)=>{return !prev});
        await setToggleClassName(!toggleStatus ? `${styles.active} ${styles.toggle}` : `${styles.toggle}`);
        await setMainClassName(!toggleStatus ? `${styles.active} ${styles.main}` : `${styles.main}`);
        // console.log(toggleStatus,toggleClassName,mainClassName);
   }
//    let toggleClassName = toggleStatus ? "active toggle" : "toggle";
//    let mainClassName = toggleStatus ? "active main" : "main"; 

  return <>
  <div className={styles.container}>
    <div className={styles.navigation}>
      <ul>
        <li>
          
          <SidebarButton styles={styles} iconRef="/pics/1.png" name="NADA-LIBRARY"/>
        </li>
        <li>
          
          <SidebarButton styles={styles} iconRef="/pics/2.png" name="DASHBOARD"/>
        </li>
        {/* <li>
          
          <SidebarButton styles={styles} iconRef="/pics/3.png" name="LOGIN"/>
        </li>  */}
        
        {/* <li>
        
          <SidebarButton styles={styles} iconRef="/pics/4.png" name="PEOPLE"/>
        </li> */}
        {props.isAdmin?<li>
        <SidebarButton styles={styles} iconRef="/pics/4.png" name="PEOPLE"/>
      </li>:null}
        <li>
        
          <SidebarButton styles={styles} iconRef="/pics/5.png" name="BOOKS" href="/books"/>
        </li>
        {/* <li>
  
          <SidebarButton styles={styles} iconRef="/pics/6.png" name="ISSUE BOOK"/>
        </li> */}
        {props.isAdmin?<li>
         <SidebarButton styles={styles} iconRef="/pics/7.png" name="RETURN BOOK" href="/issued-books"/>
       </li>:null}
       {props.isAdmin?<li>
          <SidebarButton styles={styles} iconRef="/pics/8.png" name="ADD BOOK" href="/add-book" />
        </li>:null}
        {/* <li>
          <SidebarButton styles={styles} iconRef="/pics/9.png" name="REMOVE BOOK"/>
        </li> */}
        {/* <li>
          <SidebarButton styles={styles} iconRef="/pics/10.png" name="SETTINGS"/>
        </li> */}
      </ul>
    </div>
    <div className={mainClassName}>
      <div className={styles.topbar}>
        <div className={toggleClassName} onClick={() => {toggle()}}>
          <img src="/pics/12.png" alt="menu" />
        </div>

        {/* <div className={styles.search}>
          <label>
            <img src="pics/11.png" alt="search" />
            <input type="text" placeholder="Search here" onKeyDown={(event)=>{
              if(event.key === 'Enter'){
                props.searchHandler(searchInput);
              }
            }} value = {searchInput} onChange={(e)=>{
              setSearchInput(e.target.value);
            }}/>
            
          </label>
          
        </div> */}

        {props.search ? <SearchBar searchHandler = {props.searchHandler} controlFunction={setSearchInput} controlValue = {searchInput}/> : null}

        <div className={styles.user}>
        <img  src="/pics/13.png" alt="user" onClick={()=>{
            setProfileDisplay((prev)=>{
                return {
                    display:!prev.display,
                    style:{display:`${!(prev.display)?'block':'none'}`,textAlign:'center'}
                }
            });

        }} /> 
        
      </div>
      </div>
      
      <div className={styles.div1}>
        <div id="myDIV" style={profileDisplay.style}>
          <a className={styles.signout} onClick={async()=>{
            await signOut()
          }} style={{cursor:"pointer"}}> Sign Out</a>
        </div>
      </div>
      {/* <h1 className={styles.pagetitle}>{props.title}</h1> */}
      {props.DATA && props.type === "books" ? <BookList DATA={props.DATA} loading={props.loading} searchInput={searchInput}/>:null}
      {props.type === "add-book"?<AddBook/>:null }
      <div className={styles.tables}>
      
      {/* {props.DATA && props.type==="books"?<BookTable DATA={props.DATA}/>:null} */}
      {props.type === "pending-returns" && props.DATA ? <PendingReturnsTable DATA={props.DATA} />:null }               
      {props.DATA && props.type==="book-copy" ? <CopyTableIssue DATA={props.DATA}/>:null}
      </div>
    </div>

  </div>
</>
}