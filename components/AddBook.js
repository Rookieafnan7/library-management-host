// import './App.css';
import { useEffect, useState } from "react";
import styles from "../src/styles/AddBook.module.css"
import { useRouter } from "next/router";
import ErrorAlert from "./ErrorAlert";
import { getSession } from "next-auth/react";
//${styles['']}
export default function AddBook() {
  // const router =  useRouter();
  const [name,setName] = useState("");
  const [publisher,setPublisher] = useState("");
  const [image,setImage]  = useState("");
  const [author,setAuthor] = useState("");
  const [status,setStatus] = useState(false);
  const [errorFlagStatus,setErrorFlagStatus] = useState(false);
  
  async function sendData(){
    if(name!==""&&publisher!==""&&image!==""&&author!==""){
      setErrorFlagStatus(true);
      
      let data = {
        name:name,
        publisher:publisher,
        image:image,
        author:author
        }
        try{
          const apiUrlEndpoint = "/api/add-book"
          const response = await fetch(apiUrlEndpoint,{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
          })

          const res = await response.json();
          if(res.status){
            router.push("/");
          }else{
            setErrorFlagStatus(true);
          }
        }catch(err){
          console.log(err);
        }
    }else{
      setErrorFlagStatus(true);
    } 
    
  }
  if(!status)return null
  return (
    <div className={`${styles["lg-container"]}`}>
  <div className={`${styles['container']}`}>
  {errorFlagStatus?<ErrorAlert closeHandle={setErrorFlagStatus} message="Make sure you have filled all the fields and try again"/>:null}
    <div className={`${styles['title']}`}>ADD BOOK</div>
    <div className={`${styles["content"]}`}>
      <form >
        <div className={`${styles['user-details']}`}>
          
          <div className={`${styles['input-box']}`}>
         
            <label type="text" placeholder="Enter your usename" required>BOOK NAME: <input name="name" value={name} onChange={(e)=>{
              setName(e.target.value);
            }} required /></label>
          </div>
          <div className={`${styles['input-box']}`}>
          
            <label type="text" placeholder="Enter your usename" required>AUTHOR: <input name="author" value={author} onChange={(e)=>{
              setAuthor(e.target.value)
            }} required /></label>
          </div>
          <div className={`${styles['input-box']}`}>
          
            <label type="text" placeholder="Enter your usename" required>PUBLISHER: <input name="publisher" value={publisher} onChange={(e)=>{
              setPublisher(e.target.value)
            }} required/></label>
          </div>
          <div className={`${styles['input-box']}`}>
           
            <label type="text" placeholder="Enter Image Link" required> IMAGE LINK: <input name="image" value={image} onChange={(e)=>{
              setImage(e.target.value)
            }} required /></label>
          </div>
         
        </div>
     
        <button id="submitBtn" className={`${styles['submitBtn']}`} onClick={(e)=>{
          e.preventDefault();
          
          sendData();
        }}>Submit</button>
       
      </form>
    </div>
  </div>
  
    </div>
  );
}
