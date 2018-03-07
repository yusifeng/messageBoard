let Dao = require('./dao/dao')
let utils = require('./utils/utils')
let mock = require('./mock/mock')
let config = require('./config/config')
let Comment = require('./comment/comment')




let dao = new Dao(config.url, config.sql, config.collection)

/**生成一个数组, 数组包括了多个Comment对象的实例 */
const COMMENT_LENGTH = 200
let comments = []
for (let i = 0; i < COMMENT_LENGTH; i++) {
  comments.push(new Comment({
    name: utils.getRandomString(6, 10),
    comment: mock[`comment${utils.getRandomInt(0, 14)}`],
    vipLevel: utils.getRandomInt(2, 5),
    avatar: `touxiang${utils.getRandomInt(0, 5)}.jpg`,
    floor: i + 1
  }))
}

/**插入到数据库 */
dao.insert(comments, true).then(res => {
   console.log('注入成功')
 })
