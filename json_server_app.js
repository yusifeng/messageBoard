let express = require('express')
let bodyParser = require('body-parser')
let utils = require('./utils/utils')
let Comment = require('./comment/comment')
let timeStamp = require('./mock/timeStamp')
let avatar = require('./mock/avatar')
let axios = require('axios')
let faker = require('faker')
let jsonServerConfig = require('./config/json-server.config')

let app = express()

app.use(bodyParser.json())
app.use(express.static('./static'))

app.post('/add', (req, res) => {

  let comment = new Comment({
    name: faker.name.findName(),
    content: req.body.content,
    vipLevel: utils.getRandomInt(2, 5),
    avatar: avatar[`avatar${utils.getRandomInt(1, 6)}`],
    floor: req.body.floor,
    commentTime: Date.now()
  })

  axios({
    method: 'post',
    url: jsonServerConfig.url,
    data: comment,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(result => {
    res.send('success')
  })
})


app.post('/init', (req, res) => {
  axios({
    method: 'get',
    url: jsonServerConfig.url,
    params: {
      _limit: 5,
    }
  })
  .then(result => {
    res.send(result.data)
  })
})


app.post('/count', (req, res) => {
  axios({
    method: 'get',
    url: jsonServerConfig.url,
  })
  .then(result => {
    res.send(result.data.length.toString())
  })
})

app.post('/page', (req, res) => {
  let pageIndex = req.body.pageIndex
  axios({
    method: 'get',
    url: jsonServerConfig.url,
    params: {
      _limit: 5,
      _page: pageIndex
    }
  })
  .then(result => {
    res.send(result.data)
  })
})

app.post('/updata', (req, res) => {
  let {floor, likeNum} = req.body
  let whereStr = {floor}
  let updataStr = { $set: { likeNum: likeNum + 1}}
  let updateMany = false
  axios({
    method: 'patch',
    url: `${jsonServerConfig.url}/${floor-1}`,
    data: {
      likeNum: likeNum + 1
    }
  })
  .then(result => {
    res.send(result.data)
  })
})




var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});