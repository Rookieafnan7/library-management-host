import mysql from 'mysql2/promise';
export default async function logHandle(book_id,person_id,copy_id,t_status,remarks) {
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
        // const [results] = await dbconnection.execute(query,values);
        // dbconnection.end();
        // if(results[0].status!=="available"){
        //     return false
        // }else{
        //     return true
        // }
        // console.log(t_status);
        if(t_status === "initiated"){
            console.log("called");
            
            let values = [book_id,person_id,copy_id,t_status,remarks];
            console.log(values,"values");
            let query1 = "insert into logs (book_id,person_id,copy_id,start_time,t_status,remarks) values(?,?,?,now(),?,?)";
            await dbconnection.execute(query1,values);
            // console.log(results1,"results1");
            console.log("part 1 done");
            let query2 = "select max(log_id) as log_id from logs";
            
            let [result2] = await dbconnection.execute(query2);
            console.log(result2[0].log_id);
            let query3 = `update book_copy set status = 'issued' where book_id = ${book_id} and copy_id = ${copy_id};`
            await dbconnection.execute(query3);
            dbconnection.end();
            return (result2[0].log_id);
        }
        
        // res.status(200).json({values : data});
        dbconnection.end();
    }catch(err){
        // throw Error(err.message);
        console.log(err);
        return false;
    }
  }