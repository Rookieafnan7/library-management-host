import mysql from 'mysql2/promise';
// import bookFilterResolver from './bookFilterResolver';
export async function handleReturn(values) {
  const dbconnection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"Samsung197",
    database: 'library_db',
  

  //   host:'db4free.net',
  //   port:3306,
  //   user:'rootlibrary',
  //   database:'library_db_2',
  //   password:'Samsung197',
  //   connectionLimit:100
   });
      
    try{
        let query1 = `update issue_log set return_status='true' where issue_id=?`
        let arr1 = [values.issue_id];
        await dbconnection.execute(query1,arr1);
        let query2 = `update book_copy set status='available' where book_id=? and copy_id = ?`
        let arr2 = [values.book_id,values.copy_id];
        await dbconnection.execute(query2,arr2);
        dbconnection.end();
        return true
        
        // res.status(200).json({values : data});
        
    }catch(err){
        console.log(err);
        throw Error("Return Failed");
        
    }
  }