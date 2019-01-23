const express = require('express')
const app = express()

app.use('/public', express.static('public'))

app.engine('html', require('express-art-template'));

app.get('/', (req, res) => res.send('Hello World! hello node.js'))

app.get('/express', (req, res) => res.render('index.html',{
    text:"你好，世界"
}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))