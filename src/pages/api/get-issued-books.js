import getIssuedBooksLib from "../../../lib/getIssuedBooksLib";
export default async function getBooksByName(req,res) {
   
    try{
           const results = await getIssuedBooksLib();
        //    console.log({status:true,values:[...results]});
           res.status(200).send({status:true,values:[...results]})
    }catch(err){
        console.log(err,"err");
        res.status(200).send({status:false})
    }
  }