let fs = require('fs');

console.log('准备打开文件程序开始运行');

//打开文件的路径要根据node运行的目录定，不是相对于该js文件的位置而定
fs.open('input.txt', 'r+', (err, fd) => {
   if (err) {
       return console.error(err);
   } else {
       console.log('文件打开成功，文件内容为：' + fd);
   }
});

console.log('---------------------------------');

fs.stat('input.txt', (err, stats) => {
    console.log(stats.isFile()); //如果是文件返回 true，否则返回 false。
    console.log(stats.isDirectory()); //如果是目录返回 true，否则返回 false。
    console.log(stats.isBlockDevice()); //如果是块设备返回 true，否则返回 false。
    console.log(stats.isCharacterDevice()); //如果是字符设备返回 true，否则返回 false。
    console.log(stats.isSymbolicLink()); //如果是软链接返回 true，否则返回 false。
    console.log(stats.isFIFO()); //如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
    console.log(stats.isSocket()); //如果是 Socket 返回 true，否则返回 false。
});