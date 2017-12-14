let fs = require("fs");
let zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('output.txt.zip')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('output.release.txt'));

console.log("文件解压完成。");

