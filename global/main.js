console.log( __filename );
console.log( __dirname );

let printHello = () => {
  console.log('hello world!');
};

//2秒后执行定时器
let t = setTimeout(printHello, 2000);

//清除定时器
clearTimeout(t);

let t1 = setInterval(printHello, 2000);

setTimeout(() => {clearInterval(t1)}, 5000);
