"use strict";
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
let arr = [12, "shet"];
//enumeration : key value pair type but'='
/**
 * An enum is a special "class" that represents a group of constants
 *
 *
 */
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["MODERATOR"] = "moderator";
    UserRoles["USER"] = "user";
})(UserRoles || (UserRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found code 404";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.ABANDONED);
