import mysql from 'mysql2/promise';
export default async function handleStatus(query,values=[],status) {
    const dbconnection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:"Samsung197",
        database: 'library_db',
       

        // host:'db4free.net',
        // port:3306,
        // user:'rootlibrary',
        // database:'library_db_2',
        // password:'Samsung197',
        // connectionLimit:100
      });
      //console.log(query);
    try{
        if(!status){
            const [results] = await dbconnection.execute(query,values);
            console.log(results,"results");
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