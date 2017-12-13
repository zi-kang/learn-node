let http = require('http');

http.createServer((req, res) => {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain

   res.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
   res.end('hello world\n');
}).listen(10004);

//终端打印信息
console.log('Server running at http://127.0.0.1:10004/');