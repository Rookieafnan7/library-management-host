/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import Sidebar from "../../../components/Sidebar";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
export default function BookCopy(){
    const router = useRouter();
    const {book_id} = router.query;
    const [copyData,setCopyData] = useState([])
    const [status,setStatus] = useState(false);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        
        async function checkSession(){
            const sess = await getSession();
            // console.log(sess,"session");
            if(sess === null){
                router.push("/api/auth/signin");
                // console.log(status,"status")
                
            }else{
                // console.log(sess);
                setStatus(true);
                // setLoading(false);
            }
        }

        async function getCopyData(){
            const apiUrlEndpoint = `/api/get-copy-data/${book_id}`
            
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            console.log(res,"res");
            if(res.values){
                console.log()
                await setCopyData(res.values);
                setLoading(false);
            }else{
                console.log("loading");
            }
        }
        checkSession();
        getCopyData();
    },[status])

    // if(status && copyData){
    //     if(copyData.length!=0)
    //     return <Sidebar DATA={copyData} type="book-copy" search={false}/>
    // }else{
    //     return null;
    // }
    return(
        <>
        {loading?"Loading":<Sidebar DATA={copyData} type="book-copy" search={false}/>}
        </>
    )
}