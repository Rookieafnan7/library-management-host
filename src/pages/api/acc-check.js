import  accQueryLib  from "../../../lib/accQueryLib";
import signAccessToken from "../../../lib/jwt_helper";
// const bcrypt = require("bcrypt")

export default async function accCheck(req,res){
    // console.log("credentials",credentials);
    // const credentials = {
    //     username:'Icarus',
    //     password:'admin'
    // }
    try{
        if(req.body){
            const credentials = req.body;
            let query = "SELECT person_id as id,username,password,person_name as name,start_date,email,phone_number,isAdmin from people where username = ?"
            let values = [credentials.username];
        
        const accDetail = await accQueryLib(query,values);
        // console.log(accDetail,"accDetail");
        // console.log(credentials,"credentials");
        // console.log(accDetail)
        let accessToken = '';
        // accDetail.accessToken = 
        
        if(accDetail.password === credentials.password){
            // await signAccessToken(accDetail).then((value)=>{
            //     // console.log(value);
            //     accessToken = value;
            // })
            // // let sessionObject
            // accDetail.accessToken = accessToken;
            
            // delete accDetail[password];
            // accDetail[password] = '';
            res.status(200).send({user:accDetail});
        }else{
            throw Error('Password is Incorrect');
        }
    }else{
        throw err;
    }
        

    }catch(err){
        // console.log(err);
        res.status(500).json(err);
    }
}