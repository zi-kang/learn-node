let http = require('http'),
    querystring = require('querystring');

// http.createServer((req, res) => {
//     // 定义了一个post变量，用于暂存请求体的信息
//     let post = '';
//
//     // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
//     req.on('data', (chunk) => {
//         post += chunk;
//     });
//
//     // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
//     req.on('end', () => {
//         post = querystring.parse(post);
//         res.end(util.inspect(post));
//     });
// }).listen(3000);


let postHTML =
    '<html><head><meta charset="utf-8"><title>获取POST请求内容实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer( (req, res) => {
    let body = "";
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        console.log(body);
        if(body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);