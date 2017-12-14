let buf = Buffer.alloc(26);
// let len = buf.write("测试buffer写入字符数");
//
// console.log("写入字节数 : "+  len);

for (let i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
console.log(buf);

console.log('-------------转换成json对象----------------');

let bf = Buffer.from('buffer测试用例');
let json = bf.toJSON(bf);

console.log(json);

console.log('-------------缓冲区合并---------------------');

let bf1 = Buffer.concat([buf, bf]);
console.log('合并后的buffer为：' + bf1);

console.log('------------缓冲区比较----------------------');
let buffer1 = Buffer.from('ABC');
let buffer2 = Buffer.from('ABCD');
let buffer3 = Buffer.from('ABC');
let result = buffer1.compare(buffer2);
let result1 = buffer1.compare(buffer3);

if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}

if(result1 < 0) {
    console.log(buffer1 + " 在 " + buffer3 + "之前");
}else if(result1 == 0){
    console.log(buffer1 + " 与 " + buffer3 + "相同");
}else {
    console.log(buffer1 + " 在 " + buffer3 + "之后");
}

console.log('----------------copy缓冲区区--------------');
let buf1 = Buffer.from('abcdefghijkl');
let buf2 = Buffer.from('abcdefghijkl');
let buf3 = Buffer.from('abcdefghijkl');
let buf4 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf4.copy(buf1, 2);
buf4.copy(buf2, 2, 3);
buf4.copy(buf3, 2, 3, 5);

console.log(buf1.toString()); //abRUNOOBijkl
console.log(buf2.toString()); //abOOBfghijkl
console.log(buf3.toString()); //abOOefghijkl
console.log(buf4.toString()); //RUNOOB

buf3.copy(buf4, 2);
console.log(buf4.toString()); //RUabOO

console.log('--------------剪切缓冲区-----------------');

let buf5 = Buffer.from('testBufSlice');
let buf5_1 = Buffer.from('测试缓冲剪切');
// 剪切缓冲区
let buf6 = buf5.slice(0,2);
let buf6_1 = buf5_1.slice(0,2);
console.log("buf6 content: " + buf6.toString('utf8'));
console.log("buf6_1 content: " + buf6_1.toString('ascii'));

console.log('--------------buffer长度----------------');

let buf7 = Buffer.from('测试长度');
let buf8 = Buffer.from('testLength');
//  缓冲区长度
console.log("buf7 length: " + buf7.length);
console.log("buf8 length: " + buf8.length);




console.log('程序结束');