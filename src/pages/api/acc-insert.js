
import accInsertLib from "../../../lib/accInsertLib";
export default async function accCheck(req,res){
    try{
        // console.log(req.body)
        if(req.body){
            const data = req.body;
            let query = "insert into people (phone_number,email,start_date,password,person_name,username,isAdmin) values (?,?,now(),?,?,?,'false')"
            let values = [data.phone_number,data.email,data.password,data.name,data.username];
        
            await accInsertLib(query,values);
            res.status(200).send({status:true});
        }else{
            throw Error('values not recieved');
        }

    }catch(err){
        // console.log(err,"error");
        res.status(200).send({status:false});
    }
}