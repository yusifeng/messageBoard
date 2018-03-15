let express = require('express')
let Dao = require('./dao/dao')
let formidable = require('formidable')
let config = require('./config/config')
let bodyParser = require('body-parser')
let utils = require('./utils/utils')
let Comment = require('./comment/comment')
let avatar = require('./mock/avatar')
let timeStamp = require('./mock/timeStamp')


let app = express()
app.use(bodyParser.json())
console.log(config.url, config.sql, config.collection)
let dao = new Dao(config.url, config.sql, config.collection)

app.use(express.static('./static'))

app.post('/add', (req, res) => {
  console.log(req.body.floor)
  let comment = new Comment({
    name: utils.getRandomString(6, 10),
    content: req.body.content,
    vipLevel: utils.getRandomInt(2, 5),
    avatar: avatar[`avatar${utils.getRandomInt(1, 6)}`],
    floor: req.body.floor,
    commentTime: Date.now()
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

app.post('/updata', (req, res) => {
  let {floor, likeNum} = req.body
  let whereStr = {floor}
  let updataStr = { $set: { likeNum: likeNum + 1}}
  let updateMany = false
  dao.update(whereStr, updataStr, updateMany).then(result => {
    res.send(result)
  })
})




var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});