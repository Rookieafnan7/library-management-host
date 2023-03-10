import { useEffect,useState } from "react";

export default function Books(){
    const [booksData,setBooksData] = useState([]);
    useEffect(()=>{
        async function getAllBooks(){
            const apiUrlEndpoint = "http://localhost:3000/api/get-books";
            const response = await fetch(apiUrlEndpoint);
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

    },[]);

    return(
        <h1>Books</h1>
    );
    
}