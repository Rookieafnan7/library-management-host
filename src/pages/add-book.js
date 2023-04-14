import { getSession } from "next-auth/react";
import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddBook(){
    const router = useRouter();
    const [isAdmin,setIsAdmin] = useState(false);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        async function checkSession(){
          
          const sess = await getSession();
        //   console.log(sess.user.isAdmin,"session");
          if(sess === null){
              await router.push("/api/auth/signin");
              // console.log(status,"status")
          }else{
              if(sess.user.isAdmin === 'true')
              {
                setIsAdmin(true);
                setLoading(false);   
                // console.log(loading,isAdmin) 
              }
              setLoading(false);
            //   console.log(loading,isAdmin) 
          }
        }
        checkSession();
      },[router])
      
      return(
        <>
        { !loading ? (isAdmin?<Sidebar type="add-book" adminCheck={false} isAdmin={isAdmin}/>:"Admin Only Page") : "Loading"}
      </>
      )
    
}