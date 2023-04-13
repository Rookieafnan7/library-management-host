import mysql from 'mysql2/promise';
// import bookFilterResolver from './bookFilterResolver';
export async function bookInsertLib(query,values=[]) {
    const dbconnection = await mysql.createConnection({
        // host: 'localhost',
        // user: 'root',
        // password:"Samsung197",
        // database: 'library_db',
        

        
        host:'db4free.net',
        port:3306,
        user:'rootlibrary',
        database:'library_db_2',
        password:'Samsung197',
        connectionLimit:100
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