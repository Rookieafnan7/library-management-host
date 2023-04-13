
import accInsertLib from "../../../lib/accInsertLib";
export default async function accCheck(req,res){
    try{
        
        if(req.body){
            const data = req.body;
            let query = "insert into book (name,image,author) values (?,?,?)"
            let values = [data.name,data.image,data.author];
        
            await accInsertLib(query,values);
            res.status(200).send({status:true});
        }else{
            // throw Error('values not recieved');
            res.status(200).send({status:false})
        }

    }catch(err){
        // console.log(err,"error");
        res.status(500).json(err);
    }
}