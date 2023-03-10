import { bookQueryLib } from "../../../lib/bookQueryLib";


export default async function getBooks(req,res) {
    const request = await JSON.parse(req.body);
    // console.log("request is ", request);
    try{
        
        let query = "SELECT * FROM testvalues where id = ?";
       
            let values = [request.id];
            console.log("called");
            const results = await bookQueryLib(query,values);
            
            // console.log(called);
            // console.log('done');
            res.status(200).json({values : results,present:true});
        
    }catch(err){
        console.log(err);
        // res.status(500).json(err);
    }
  }