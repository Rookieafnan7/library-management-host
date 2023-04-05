import  accQueryLib  from "../../../lib/accQueryLib";
import signAccessToken from "../../../lib/jwt_helper";
// const bcrypt = require("bcrypt")

export default async function accCheck(req,res){
    const credentials = req.body;
    // console.log("credentials",credentials);
    // const credentials = {
    //     username:'Icarus',
    //     password:'admin'
    // }
    try{
        let query = "SELECT person_id,password,username,person_name,start_date,email,phone_number from people where username = ?"
        let values = [credentials.username];
        
        const accDetail = await accQueryLib(query,values);
        console.log(accDetail)
        let accessToken = '';
        // accDetail.accessToken = 
        
        if(accDetail.password === credentials.password){
            await signAccessToken(accDetail).then((value)=>{
                console.log(value);
                accessToken = value;
            })
            accDetail.accessToken = accessToken;
            res.status(200).send({user:accDetail});
        }else{
            throw Error('Password is Incorrect');
        }

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}