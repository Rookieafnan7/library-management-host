import handleStatus from "../../../lib/handleStatusLib";
import issueHandle from "../../../lib/issueHandle";
import logHandle from "../../../lib/logHandle";

export default async function issueBookRequest(req,res){
    try{
        const copyData = req.body;
        console.log(copyData,"copyData");
        let query1 = "select * from book_copy where book_id = ? and copy_id = ?"
        let values = [copyData.book_id,copyData.copy_id] 
        const copyAvailability = await handleStatus(query1,values,false);
        if(!copyAvailability) throw Error("Copy No longer Available");
        const log_id = await logHandle(copyData.book_id,copyData.person_id,copyData.copy_id,"initiated","");
        // console.log(log_id);
        if(!log_id)throw Error("Error occured during log_id fetching");
        // const issueOut =
        const issueInsertStatus = await issueHandle(copyData.book_id,copyData.person_id,copyData.copy_id,log_id);
        if(!issueInsertStatus) throw Error("Error while inserting issue data");
        res.status(200).send({status:true});

    }catch(err){
        console.log(err);
        res.status(200).send({status:false});
    }
}