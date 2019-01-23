
var fs=require("fs");


fs.readFile('../resource/hello.text',function(data,err){

	  if(err){
	  	console.log(err);
	  	return;
	  }else{
	  	console.log(String(data));
	  }

	


})