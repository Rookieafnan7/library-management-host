/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import styles from '../src/styles/App.module.css'
import { useState } from 'react'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
export default function Login() {
	const [username,setUsername] = useState('');
	const [password,setPassword] = useState('')
  return (
    <section>
        <div className={styles.signup}>
			<div className={`${styles.sect1}`}>
				<h2>Login</h2>
				<span>Join and experience the wonder of reading!</span>
				<form id='form' className={`${styles.flex} ${styles.flexcol}`} >

					<div className={styles.fields}>
						<input type ='text' placeholder='Username' name='username' value={username} onChange={(e)=>{
							setUsername(e.target.value);
						}}></input>
						<input type ='text' placeholder='Password' name='password' value={password} onChange={(e)=>{
							setPassword(e.target.value);
						}}></input>
					</div>
					
					<button className={styles.btn} onClick={async(e)=>{
						e.preventDefault();
						await signIn("credentials",{
							username:username,
							password:password,
							redirect:true,
							callbackUrl:"/"
						})
					}}>Proceed</button>
				</form>
				<Link href='/signup'><div >New Here? Signup by Clicking This!</div></Link>
			</div>
			<div className={styles.sect2}>
			<img src = 'https://raw.githubusercontent.com/akashyap2013/React_Form_Hook_Registration_Form/master/src/assets/img1.jpg' alt='lala' />
			</div>
        </div> 
    </section>
  )
}
