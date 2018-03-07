let express = require('express')
let Dao = require('./dao/dao')
let formidable = require('formidable')
let config = require('./config/config')
let bodyParser = require('body-parser')
let utils = require('./utils/utils')
let Comment = require('./comment/comment')


let app = express()
app.use(bodyParser.json())
console.log(config.url, config.sql, config.collection)
let dao = new Dao(config.url, config.sql, config.collection)

app.use(express.static('./static'))
// app.use(express.static('./asset'))

app.post('/add', (req, res) => {
  console.log(req.body)

  let comment = new Comment({
    name: utils.getRandomString(6, 10),
    comment: req.body.comment,
    vipLevel: utils.getRandomInt(2, 5),
    avatar: `touxiang${utils.getRandomInt(0, 5)}.jpg`,
    floor: req.body.floor
  })
  dao.insert(comment).then(result => {
    res.send(comment)
  })
})

app.post('/init', (req, res) => {
  dao.search().then(result => {
    res.send(result)
  })
})

app.post('/prev', (req, res) => {
  let pageIndex = req.body.pageIndex
  dao.search({}, 5, pageIndex).then(result => {
    res.send(result)
  })
})

app.post('/count', (req, res) => {
  dao.count().then(count => {
    res.send(count.toString())
  })
})

app.post('/page', (req, res) => {
  let pageIndex = req.body.pageIndex
  dao.search({}, 5, pageIndex).then(result => {
    res.send(result)
  })
})




var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});