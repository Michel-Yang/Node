var express = require("express");
var fs=require('fs');
//引入POST请求包
var bodyParser = require("body-parser")


var app = express();

//配置静态资源
app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

//配置模板引擎
app.engine('html', require('express-art-template'));

//配置post请求

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

var comments = [{
        name: "小李",
        message: "今天天气很好",
        dateTime: "2019-5-25"
    },
    {
        name: "小李",
        message: "今天天气很好",
        dateTime: "2019-5-25"
    },
    {
        name: "小李",
        message: "今天天气很好",
        dateTime: "2019-5-25"
    }
]

var router=require('./router')

app.use(router)



app.listen(3000, function () {
    console.log("express is running...")
})


/* p60 */