import { bookQueryLib } from "../../../lib/bookQueryLib"; 

export default async function getBooksByName(req,res) {
   
    try{
            const data = req.body;
            console.log(data,"data");
            let query = ''
            let values = [];
            
            // console.log("called");
            const results = await bookQueryLib(query,values,data);
            console.log(results,"api")
            res.status(200).json({values : results,present:true});
        
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
  }