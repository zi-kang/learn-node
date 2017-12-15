let util = require('util');

function Person() {
    this.name = 'kunt';
    this.toString = function () {
        return this.name;
    };
}

let obj = new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

console.log('-----------------------------');

console.log(util.isArray([]));
console.log(util.isArray(new Array()));
console.log(util.isArray({}));
console.log(util.isArray([1,2,3,4,5]));


console.log('-----------------------------');

console.log(util.isRegExp(/some regexp/));
console.log(util.isRegExp(new RegExp('another regexp')));
console.log(util.isRegExp({}));

console.log('-----------------------------');

console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));
console.log(util.isDate({}));
console.log(util.isDate('123165123123'));

console.log('-----------------------------');

console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({name: 'error', message: 'an error occurred'}));






