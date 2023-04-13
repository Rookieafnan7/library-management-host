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
    const [loading,setLoading] = useState(true);
    
    async function getBooksFromName(input){
        const filter = {
            values:input,
            name:"true"
        }
        const apiUrlEndpoint = "/api/get-book-from-name"
        const response = await fetch(apiUrlEndpoint,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(filter)
        })
        const res = await response.json();
        // await setBooksData(res);
        // console.log(res.values)
        setBooksData(res.values);
    }
    
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
                setLoading(false);
            }else{
                console.log("reloading");
            }
        }
        checkSession();
        getAllBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
        if(status){
            return <Sidebar  DATA={booksData} type="books" searchHandler={getBooksFromName} search={true} loading={loading}/>
        }else{
            return null;
        }
    
    
    
}