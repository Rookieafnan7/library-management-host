import mysql from 'mysql2/promise';

export async function bookQueryLib(query,values=[]) {
    const dbconnection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:"Samsung197",
        database: 'library_db',
        //for local env
        //socketPath:"/Applications/MAMP/tmp/mysql/mysql.sock"
      });
    try{
        
        const [results] = await dbconnection.execute(query,values);
        dbconnection.end();
        return(results);
        // res.status(200).json({values : data});
        
    }catch(err){
        throw Error(err.message);
        return (err);
    }
  }