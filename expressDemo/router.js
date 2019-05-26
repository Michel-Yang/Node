var express = require('express');
var fs = require('fs')

var router = express.Router()

router.get('/', function (req, res) {

    fs.readFile('./db.json', 'utf8', function (err, data) {

        if (err) {
            console.log(err);
            return;
        } else {

            var student = JSON.parse(data).students;

            res.render('index.html', {
                fruits: ['苹果', '梨', '香蕉'],
                students: student
            })

        }

    })

})


router.get('/add', function (req, res) {

    fs.readFile('./db.json', 'utf8', function (err, data) {

        /*   if (err) {
              console.log(err);
              return;
          } else { */

        var student = JSON.parse(data).students;

        res.render('add.html', )

        /*  } */

    })

})


router.post('/add/save', function (req, res) {

    var newdata = req.body
    newdata.gender = 1;

    fs.readFile('./db.json', 'utf8', function (err, data) {
        var student = JSON.parse(data).students;
        newdata.id = student[student.length - 1].id + 1;
        student.push(newdata);
        fs.writeFile('./db.json', JSON.stringify({
            "students": student
        }), function (err, data) {

            if (err) {
                console.log(123)
            } else {
                res.redirect('/')
            }
        })

    })

})

router.get('/delete', function (req, res) {

   /*  console.log(req.query) */

    var index=req.query.id;

   /*  var newdata = req.body
    newdata.gender = 1; */

    fs.readFile('./db.json', 'utf8', function (err, data) {
        var student = JSON.parse(data).students;


        var index=student.findIndex(function(item){
                 return item.id===index;
        })

        var result=student.splice(index,1);
        console.log(result)
        /* newdata.id = student[student.length - 1].id + 1;
        student.push(newdata);*/
        fs.writeFile('./db.json', JSON.stringify({
            "students": student
        }), function (err, data) {

            if (err) {
                console.log(123)
            } else {
                res.redirect('/')
            }
        }) 

    }) 

})



/* app.get('/pinlun', function (req, res) {
    var comment = req.query;
    comment.dateTime = "2019-5-25 21:52";
    comments.unshift(comment);
    res.redirect('/')
}) */


/* router.get('/post', function (req, res) {
    res.render('post.html')
}) */

//添加评论

router.post('/post', function (req, res) {
    var comment = req.body;
    comment.dateTime = "2019-5-25 21:52";
    comments.unshift(comment);
    res.redirect('/')

})

module.exports = router;