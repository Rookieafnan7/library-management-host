import mysql from 'mysql2/promise';
export default async function handleStatus(query,values=[],status) {
    const dbconnection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:"Samsung197",
        database: 'library_db',
        //for local env
        //socketPath:"/Applications/MAMP/tmp/mysql/mysql.sock"
      });
      //console.log(query);
    try{
        if(!status){
            const [results] = await dbconnection.execute(query,values);
            dbconnection.end();
            if(results[0].status!=="available"){
                return false
            }else{
                return true
            }
        }else{
            await dbconnection.execute(query,values);
            dbconnection.end()
            return true;
        }
        // return(results[0]);
        // res.status(200).json({values : data});
        
    }catch(err){
        // throw Error(err.message);
        console.log(err);
        return false;
    }
  }