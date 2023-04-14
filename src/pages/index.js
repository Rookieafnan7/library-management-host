import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
export default function Dashboard(){
  const[isAdmin,setIsAdmin] = useState(false);
  const router = useRouter();
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
              
            // console.log(loading,isAdmin) 
          }
          // setStatus(true);
          // setLoading(false);
        //   console.log(loading,isAdmin) 
      }
    }
    checkSession()
  })
  return(
    <Sidebar isAdmin={isAdmin}/>
  )
}