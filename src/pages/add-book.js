import { getSession } from "next-auth/react";
import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddBook(){
    const router = useRouter();
    const [isAdmin,setIsAdmin] = useState(false);
    useEffect(()=>{
        async function checkSession(){
          
          const sess = await getSession();
          // console.log(sess,"session");
          if(sess === null){
              await router.push("/api/auth/signin");
              // console.log(status,"status")
          }else{
              if(sess.user.isAdmin === 'true')
              setIsAdmin(true);
          }
        }
        checkSession();
      })
      

    if(isAdmin){
        return <Sidebar type="add-book"/>
    }else return (<h1>Only Admins can access this page</h1>);
}