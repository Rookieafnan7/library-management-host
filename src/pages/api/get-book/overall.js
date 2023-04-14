import { bookQueryLib } from "../../../../lib/bookQueryLib";
import createLog from "../../../../lib/logHandle";
import issueHandle from "../../../../lib/issueHandle";

export default async function getBooks(req,res) {
    const filters = req.body;
    //console.log(filters);
    try{

        let query = "SELECT * FROM book";
        let values = [];
        // console.log("called");
        const results = await bookQueryLib(query,values,filters);
        // issueHandle(1,1,1,1,false);
        // createLog();
        // console.log(called);
        res.status(200).json({values : results});
        
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
  }