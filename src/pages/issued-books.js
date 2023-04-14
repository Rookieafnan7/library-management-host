/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react";
import { getSession } from "next-auth/react";
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
                const response = await fetch("/api/get-issued-books");
                const res = await response.json();

                if(res.status){
                    setCopyData(res.values);
                    setLoading(false);
                    // console.log(copyData,status)
                }else{
                    throw Error("Error while fetch");
                }
            }catch(err){
                console.log(err);
            }
        }
        checkSession();
        getCopyData();
        
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
        {/* {!loading?console.log(copyData):null} */}
        {!loading ? (copyData?<Sidebar DATA={copyData} type="pending-returns" search={false} loading={loading} isAdmin={isAdmin}/>:<h1>No Pending Book Returns</h1>):null}
        </>
    )
}