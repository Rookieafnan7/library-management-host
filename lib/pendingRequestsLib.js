import mysql from 'mysql2/promise';
export default async function pendingRequestsLib(){
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
    try{
        // console.log("connected");
        let query = "select a.issue_id,a.book_id,a.copy_id,b.name as book_name,c.person_name,a.person_id,b.author,a.return_time from issue_log a inner join book b on a.book_id = b.book_id inner join people c on a.person_id = c.person_id where now() > a.return_time and a.return_status = 'false'"
        const [results] = await dbconnection.execute(query);
        // console.log(results,"results");
        dbconnection.end();
        return results;
    }catch(err){
        console.log(err);
        throw Error("Issue executing query");
    }
       
}



