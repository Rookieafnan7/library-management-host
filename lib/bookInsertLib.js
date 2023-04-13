import mysql from 'mysql2/promise';
// import bookFilterResolver from './bookFilterResolver';
export async function bookInsertLib(query,values=[]) {
    const dbconnection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:"Samsung197",
        database: 'library_db',
        //for local env
        //socketPath:"/Applications/MAMP/tmp/mysql/mysql.sock"
      });
    //   query = bookFilterResolver(query,filters,values);
    //   console.log(query);
    try{
         await dbconnection.execute(query,values);
         dbconnection.end();
        // res.status(200).json({values : data});
    }catch(err){
        throw Error(err.message);
        return (err);
    }
  }