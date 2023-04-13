import mysql from 'mysql2/promise';
export default async function issueHandle(book_id,person_id,copy_id,log_id) {
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
      //console.log(query);
    try{
        
        let query = "insert into issue_log (book_id,person_id,copy_id,log_id,issue_time,return_time,return_status) values(?,?,?,?,now(),addtime(now(),'14 0:0:0'),'false')";
        let values = [book_id,person_id,copy_id,log_id];
        dbconnection.execute(query,values);
        dbconnection.end()
        return true;
    
        
    }catch(err){
        dbconnection.end();
        return false
        // throw Error(err.message);
        // return (err);
    }
  }