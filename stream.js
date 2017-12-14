let fs = require('fs');
let data = '';
console.log('读取程序开始');
//创建可读流
let readerStream = fs.createReadStream('input.txt');

//设置编码为utf-8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', (chunk) => {
    data += chunk;
});

readerStream.on('end', () => {
    console.log(data);
});

readerStream.on('error', (err) => {
    console.log(err.stack);
});

console.log("读取程序执行完毕");

setTimeout(() => {
    console.log('写入程序开始');
    let data = "写入字符测试";
    // 创建一个可以写入的流，写入到文件 output.txt 中
    let writerStream = fs.createWriteStream('output.txt');

    // 使用 utf8 编码写入数据
    writerStream.write(data,'UTF8');

    // 标记文件末尾
    writerStream.end();

    // 处理流事件 --> data, end, and error
    writerStream.on('finish', () => {
        console.log("写入完成。");
    });

    writerStream.on('error', (err) => {
        console.log(err.stack);
    });

    console.log("写入程序结束");


}, 1000);

