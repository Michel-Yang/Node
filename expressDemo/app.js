var express = require("express");
//引入POST请求包
var bodyParser = require("body-parser")


var app = express();

//配置静态资源
app.use('/public/', express.static('./public/'))

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

app.get('/', function (req, res) {
    res.render('index.html', {
        comments: comments
    })
})



/* app.get('/pinlun', function (req, res) {
    var comment = req.query;
    comment.dateTime = "2019-5-25 21:52";
    comments.unshift(comment);
    res.redirect('/')
}) */


app.get('/post', function (req, res) {
    res.render('post.html')
})

//添加评论

app.post('/post', function (req, res) {
    var comment = req.body;
    comment.dateTime = "2019-5-25 21:52";
    comments.unshift(comment);
    res.redirect('/')

})



app.listen(3000, function () {
    console.log("express is running...")
})