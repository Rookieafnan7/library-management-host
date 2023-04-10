
import accInsertLib from "../../../lib/accInsertLib";
export default async function accCheck(req,res){
    try{
        if(req.body){
            const data = req.body;
            let query = "insert into people (phone_number,email,start_date,password,person_name,username,isAdmin) values (?,?,now(),?,?,?,'false')"
            let values = [data.phone_number,data.email,data.password,data.person_name,data.username];
        
            const result = await accInsertLib(query,values);
            res.status(200).send(result);
        }else{
            throw Error('values not recieved');
        }
        

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}