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

//any: disable type checking
let value:any;
value=2;
value='shd'
value=true


//unknown: type constraints
let a:unknown;
a=2;
a='shd'
if(typeof a ==='string')
    a.toUpperCase()


//void: if function doesn't return

function an():void{
    console.log('hello')
}

//if returns
function b():number{
    return 4;
}

function ab():string{
    return 'shwea';
}

//null
let x:null;
let y:null|string

//undefined
let c:undefined

//never: which never get run or return: not run further code
function xk():never{
    while(true){}

    }
    xk();
    console.log()

