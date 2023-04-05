const jwt = require("jsonwebtoken")
export default async function signAccessToken(payload){
    return new Promise((resolve,reject) => {
        const secret = 'blalalbfalf'
        const options = {}
        jwt.sign(payload,secret,options,(err,token)=>{
            if(err)reject(err)
            resolve(token)
        })
    } )
} 