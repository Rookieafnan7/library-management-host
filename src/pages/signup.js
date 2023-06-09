/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/App.module.css'
import ErrorAlert from '../../components/ErrorAlert';
import SuccessAlert from '../../components/SuccessAlert';
export default function Sign() {
    const [errorFlagStatus,setErrorFlagStatus] = useState();
    const [username,setUsername] = useState('');
	const [password,setPassword] = useState('');
    const [email,setEmail] = useState('')
    const [phone_number,setPhone_number] = useState('')
    const [name,setName] = useState('')
    const [success,setSuccess] = useState(false);
    async function handleClick(e){
        e.preventDefault();
        // console.log("clicked");
        const data = {
            username:username,
            password:password,
            email:email,
            phone_number:phone_number,
            name:name
        }
        const apiUrlEndpoint = "/api/acc-insert"
        try{
         const response = await fetch(apiUrlEndpoint,{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        const res = await response.json();
        // console.log(res,"res");
        if(!res.status){
            throw Error("Something went wrong!");
        }else{
            // console.log("Successful");
            setSuccess(true);
        }
        }catch(err){
            // console.log(err,"err");
            // console.log(err,"signup");
            setErrorFlagStatus(true);
            // console.log(errorFlagStatus);
        }
        // console.log(results);
    }
  return (
    <div className='App'>
        <section>
            {errorFlagStatus?<ErrorAlert closeHandle={setErrorFlagStatus}/>:null}
            {success?<SuccessAlert/>:null}
            <div className={styles.signup}>
                <div className={`${styles.sect1}`}>
                    <h2>Sign Up</h2>
                    <span>Join and experience the wonder of reading!</span>
                    <form id='form' className={`${styles.flex} ${styles.flexcol}`} >
                    <div className={styles.fields}>
                            <input type ='text' placeholder='Name' name='name' value={name} onChange={(e)=>{
                                setName(e.target.value)
                            }}></input>
                        </div>

                        <div className={styles.fields}>
                            <input type ='text' placeholder='Username' name='username' value={username} onChange={(e)=>{
                                setUsername(e.target.value)
                            }}></input>
                            <input type ='text' placeholder='Password' name='password' value={password} onChange={(e)=>{
                                setPassword(e.target.value)
                            }}></input>
                        </div>
                        
                        <div className={styles.fields}>
                        <input type ='text' placeholder='Email' name='email' value={email} onChange={(e)=>{
                                setEmail(e.target.value)
                            }}></input>
                            <input type ='text' placeholder='Phone_number' name = 'phone_number' value={phone_number} onChange={(e)=>{
                                setPhone_number(e.target.value)
                            }}></input>
                            </div>
                        <button className={styles.btn} onClick={handleClick} style={{cursor:'pointer'}}>Proceed</button>
                    </form>
                </div>
                <div className={styles.sect2}>
                <img src = 'https://raw.githubusercontent.com/akashyap2013/React_Form_Hook_Registration_Form/master/src/assets/img1.jpg' alt='lala' />
                </div>
            </div> 
        </section>

    </div>
    )
}
