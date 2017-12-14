let fs = require('fs'),
    zlib = require('zlib');

console.log('压缩程序开始');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('output.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('output.txt.zip'));

console.log("文件压缩完成。");