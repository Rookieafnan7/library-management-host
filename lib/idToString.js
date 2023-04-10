export default function(array){
    let res = array.map((value)=>{
        let temp = {book_id:value.book_id.toString(),name:value.name,publisher:value.publisher,author:value.author}
        return temp;
    })
    return res;
}