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
//any: disable type checking
let value;
value = 2;
value = 'shd';
value = true;
//unknown: type constraints
let a;
a = 2;
a = 'shd';
if (typeof a === 'string')
    a.toUpperCase();
//void: if function doesn't return
function an() {
    console.log('hello');
}
//if returns
function b() {
    return 4;
}
function ab() {
    return 'shwea';
}
//null
let x;
let y;
//undefined
let c;
//never: which never get run or return: not run further code
function xk() {
    while (true) { }
}
xk();
console.log();
