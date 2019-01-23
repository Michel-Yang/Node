var http=require('http');

var server=http.createServer();

server.on('request',function(request,response){
	console.log("收到客户端请求了"+request.url);

	response.write("Hello Node.js");
	response.end();
})

server.listen(3000,function(){
	console.log("服务器启动成功了")
})
