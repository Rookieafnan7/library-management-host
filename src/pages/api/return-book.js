import { handleReturn } from "../../../lib/handleReturn"
export default async function returnBook(req,res){
    let data = req.body
    console.log(data,"data")
    try{
        const status = await handleReturn(data);
        // console.log(status);
        res.status(200).send({status:status})
        
    }catch(err){
        console.log(err);
        res.status(200).send({status:false});
    }
}