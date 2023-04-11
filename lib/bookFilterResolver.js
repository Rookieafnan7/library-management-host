const bookFilterResolver = function(query,filters = {},values=[]){
    if(Object.keys(filters).length == 0){
        return query;
    }else{
        if(filters.name == "asc" || filters.name == "desc"){
            query+=` order by name ${filters.name}`
            return query;
        }else if(filters.time == "asc" || filters.time == "desc"){
            query+=` order by name ${filters.time}`;
            return query;
        }else if(filters.name == "true"){
            query = `Select * from book WHERE name LIKE '%${filters.values}%'`
            return query;
        }
    }
}
export default bookFilterResolver;