import { getSession, signIn, useSession } from "next-auth/react";

import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import Sidebar from "../../components/Sidebar";
// import BasicTable from "../../components/BasicTable";
// import {COLUMNS} from "../../column-format/columns-book";
export default function Books(){
    // console.log(COLUMNS);
    const router = useRouter();
    // const { data: session, status } = useSession({required:true})

    const [booksData,setBooksData] = useState([]);
    const [filters,setFilters] = useState({});
    const [status,setStatus] = useState(false);
    
    useEffect(()=>{
        async function checkSession(){
            const sess = await getSession();
            // console.log(sess,"session");
            if(sess === null){
                router.push("/api/auth/signin");
                // console.log(status,"status")
            }else{
                setStatus(true);
            }
        }
        async function getAllBooks(){
            
            const apiUrlEndpoint = "/api/get-book/overall";
            const response = await fetch(apiUrlEndpoint,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(filters)
            });
            const res = await response.json();
            // d
            // console.log(res.values);
            if(res.values){
                setBooksData(res.values);
            }else{
                console.log("reloading");
            }
        }
        checkSession();
        getAllBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
        if(status){
            return <Sidebar DATA={booksData} type="books"/>
        }else{
            return null;
        }
    
    
    
}