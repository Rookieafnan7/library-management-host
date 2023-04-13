import { bookCopyLib } from '../../../../lib/bookCopyLib';
// import {bookQueryLib} from '../../../../lib/bookQueryLib'

export default async function getBookCopyById(req,res) {
    //const request = await JSON.parse(req.body);
    const id = req.query.book_id;
    // console.log(id,"book_id");
    // console.log("request is ", request);
    // console.log(id);
    try{
        
        let query = "select a.copy_id,a.status,a.book_id,b.name,b.author from book_copy a inner join book b on a.book_id = b.book_id where a.book_id = ?";
       
            let values = [id];
            // console.log("called");
            const results = await bookCopyLib(query,values);
            // console.log(results,"results");
            // console.log(called);
            
            // console.log('done');
            res.status(200).json({values : results,present:true});
        
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
  }