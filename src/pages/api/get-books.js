import { bookQueryLib } from "../../../lib/bookQueryLib";


export default async function getBooks(req,res) {
    
    try{
        let query = "SELECT * FROM testvalues";
        let values = [];
        console.log("called");
        const results = await bookQueryLib(query,values);
        // console.log(called);
        res.status(200).json({values : results});
        
    }catch(err){
        console.log(err);
        // res.status(500).json(err);
    }
  }