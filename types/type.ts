/****
 * primitve-(number,string,boolean)
 * basic types
 * primitive()
 * array
 * tuples
 * enum
 * any: unknown let a; undefined , never
 *  
 * 
 * 
 * reference -() [] {} --can't be directly copy
 * */
 
//tuples
let arr: [number,string]=[12,"shet"];

//enumeration : key value pair type but'='
/**
 * An enum is a special "class" that represents a group of constants 
 * 
 * 
 */
enum UserRoles{
    ADMIN="admin",
    MODERATOR="moderator",
    USER="user"
}

enum StatusCodes{
    ABANDONED="abandoned status code 500",
    NOTFOUND="not found code 404"
}
console.log(StatusCodes.ABANDONED)




