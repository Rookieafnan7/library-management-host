 import pendingRequestsLib from "../../../lib/pendingRequestsLib"

export default async function getBooksByName(req,res) {
   
    try{
           const results = await pendingRequestsLib();
           res.status(200).send({status:true,values:[...results]})
    }catch(err){
        console.log(err,"err");
        res.status(200).send({status:false})
    }
  }