var fs=require("fs");

fs.writeFile('../resource/hello.text','你好！世界',function(err){
	if(err){
		console.log(err);
		return;
	}else{
		console.log("写入成功")
	}

})