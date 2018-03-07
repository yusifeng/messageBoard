let Dao = require('./dao/dao')
let config = require('./config/config')

let dao = new Dao(config.url, config.sql, config.collection)

dao.count().then((count) => {
    console.log(count)
})