
let util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = () => {
        console.log('Hello' + this.name);
    };
}

Base.prototype.showName = function() {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

console.log('------------------------');
let objBase = new Base();
objBase.showName();
objBase.sayHello();

console.log(objBase);
console.log('---------------------------');
let objSub = new Sub();
objSub.showName();
// objSub.sayHello(); //objSub.sayHello is not a function

console.log(objSub);
