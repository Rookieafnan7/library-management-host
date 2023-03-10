import { useEffect,useState } from "react";
import { useRouter } from "next/router";

export default function Book(){
    const router = useRouter();
    const [bookData,setBookData] = useState({});
    // console.log(router.query);
    // const {id} = router.query
    useEffect(()=>{
        if(!router.isReady)return;
        async function getBookInfo(){
            console.log("called because of",router.query.id,router.isReady)
            const postData = {
                method: "POST",
                header:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    id:router.query.id
                })
            };
            const apiUrlEndpoint = "http://localhost:3000/api/get-book-info";
             
            const res = await fetch(apiUrlEndpoint, postData);
            const data = await res.json();
            // const res = fetch(apiUrlEndpoint, postData).then((response) => {response.json()}).then((res)=>{setBookData(res.values[0])});

            // if(data.present === true){
            setBookData(data.values[0]);
            // }else{
            //     console.log("loading");
            // }
            // console.log(data);
        
        }
        getBookInfo();
    },[router.query.id,router.isReady])
    // const data = getBookInfo()
    
    // console.log(bookData)
    return (<>
            <p>{bookData.id} {bookData.name} {bookData.author} </p>
        </>)
}