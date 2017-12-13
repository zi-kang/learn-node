let fs = require('fs');

// let data = fs.readFileSync('server.js');
//
// console.log(data.toString());
// console.log('程序执行完毕');

fs.readFile('server.js', (err, msg) => {
    if (err) return console.error(err);
    console.info(msg.toString());
});

console.log('程序执行完毕!!!');