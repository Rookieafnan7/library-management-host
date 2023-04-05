import { useEffect,useState } from "react";

export default function Books(){
    const [booksData,setBooksData] = useState([]);
    const [filters,setFilters] = useState({});
    useEffect(()=>{
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
            console.log(res.values);
            if(res.values){
                setBooksData(res.values);
            }else{
                console.log("reloading");
            }
        }
        getAllBooks();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <h1>Books</h1>
    );
    
}