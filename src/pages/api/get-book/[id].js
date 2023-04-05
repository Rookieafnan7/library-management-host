import {bookQueryLib} from '../../../../lib/bookQueryLib'

export default async function getBooks(req,res) {
    //const request = await JSON.parse(req.body);
    const id = req.query.id;
    // console.log("request is ", request);
    console.log(id);
    try{
        
        let query = "SELECT * FROM book where book_id = ?";
       
            let values = [id];
            console.log("called");
            const results = await bookQueryLib(query,values);
            
            // console.log(called);
            // console.log('done');
            res.status(200).json({values : results,present:true});
        
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
  }