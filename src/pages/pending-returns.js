/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";
export default function PendingReturns(){

    const router = useRouter();
    const [copyData,setCopyData] = useState([])
    const [loading,setLoading] = useState(true);
    const [status,setStatus] = useState(false);
    const [isAdmin,setIsAdmin] = useState(false);
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
                setStatus(true);
                setLoading(false);
              //   console.log(loading,isAdmin) 
            }
          }
        async function getCopyData(){
            try{
                const response = await fetch("/api/get-pending-returns");
                const res = await response.json();
                if(res.status){
                    console.log(res.values,"values")
                    await setCopyData(res.values);
                    await setLoading(false);
                }else{
                    throw Error("Error while fetch");
                }
            }catch(err){
                console.log(err);
            }
        }
        checkSession();
        getCopyData();
        // console.log(copyData,status)
    },[])
    // if(status){
    //     copyData.length>0?<Sidebar DATA={copyData} type="pending-returns" search={false} loading={loading}/>:"No Pending Book Returns";
    // }else{
    //     return null;
    // }

    if(!status){
        return null
    }
    return(
        <>
        {!loading ? (copyData?<Sidebar DATA={copyData} type="pending-returns" search={false} loading={loading} isAdmin={isAdmin}/>:<h1>No Pending Book Returns</h1>):null}
        </>
    )
}