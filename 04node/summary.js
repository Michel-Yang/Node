var http = require("http");
var fs = require("fs")

var server = http.createServer();

server.on("request", function (req, res) {

    var url = req.url;
    

    if (url === '/') {
        fs.readFile("../web/scroll.html", function (err, data) {
            if (err) {
                res.end("文件读取失败");
                return;
            } else {
              /*   res.setHeader('Content-type', 'image/jpeg'); */
                res.end(data);
            }
        })

    }else if(url.indexOf("img")>-1){
        
        fs.readFile(url, function (err, data) {
            if (err) {
               /*  console.log(url); */
                res.end("文件读取失败");
                return;
            } else {
                console.log(1111)
                res.setHeader('Content-type', 'image/jpeg'); 
                res.end(data);
            }
        })
    }else{
        fs.readFile(url, function (err, data) {
            if (err) {
                res.end("文件读取失败");
                return;
            } else {
              /*   res.setHeader('Content-type', 'image/jpeg'); */
                res.end(data);
            }
        })
    }

})

server.listen(3000, function () {
    console.log("服务器启动成功了")
})