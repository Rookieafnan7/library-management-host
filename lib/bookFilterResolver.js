const bookFilterResolver = function(query,filters = {}){
    if(Object.keys(filters).length == 0){
        return query;
    }else{
        if(filters.name == "asc" || filters.name == "desc"){
            query+=` order by name ${filters.name}`
            return query;
        }else if(filters.time == "asc" || filters.time == "desc"){
            query+=` order by name ${filters.time}`;
            return query;
        }
    }
}
export default bookFilterResolver;