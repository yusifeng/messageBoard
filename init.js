// let Dao = require('./dao/dao')
let utils = require('./utils/utils')
let content = require('./mock/content')
let config = require('./config/config')
let Comment = require('./comment/comment')
let avatar = require('./mock/avatar')
let timeStamp = require('./mock/timeStamp')
let fs = require('fs')
let faker = require('faker')



// let dao = new Dao(config.url, config.sql, config.collection)

/**生成一个数组, 数组包括了多个Comment对象的实例 */
const COMMENT_LENGTH = 200
let comments = []
for (let i = 0; i < COMMENT_LENGTH; i++) {

  comments.push(new Comment({
    name: faker.name.findName(),
    content: content[`content${utils.getRandomInt(0, 14)}`],
    vipLevel: utils.getRandomInt(2, 5),
    avatar: avatar[`avatar${utils.getRandomInt(1, 6)}`],
    // avatar: faker.internet.avatar(),
    floor: i + 1,
    commentTime: timeStamp[utils.getRandomInt(0, timeStamp.length -1)],
    id: i
  }))

}

let json = {
  comments: comments
}
fs.writeFile('./db.json', JSON.stringify(json), (err, res) => {
  console.log('success')
})
// console.log(comments)

/**插入到数据库 */
// console.log(comments)
// dao.insert(comments, true).then(res => {
//    console.log('注入成功')
//  })

 