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
            }
        }

        async function getCopyData(){
            const apiUrlEndpoint = `/api/get-copy-data/${book_id}`
            
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            // console.log(res,"res");
            await setCopyData(res.values);
        }
        checkSession();
        getCopyData();
    },[status])

    if(status && copyData.length!=0){
        return <Sidebar title={`${copyData[0].name} by ${copyData[0].author}`} DATA={copyData} type="book-copy" search={false}/>
    }else{
        return null;
    }
}