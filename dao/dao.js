let MongoClient = require('mongodb').MongoClient


class Dao {
  /**
   * 要连接到的mongodb数据库url和数据库sql和集合collection
   * @param {String} url 
   * @param {String} sql 
   * @param {String} collection 
   */
  constructor(url, sql, collection) {
    this.url = url
    this.sql = sql
    this.collection = collection
  }
  /**
   * 连接数据库
   */
  _initConnect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url, (err, db) => {
        if (err) {
          reject(err)
          return 
        } else {
          resolve(db)
        }
      })
    })
  }
  /**
   * 插入数据
   * @param {arr || obj} documents 
   * @param {boolean} insertMany 
   */
  insert(documents, insertMany) {
    return new Promise((resolve, reject) => {
      this._initConnect().then((db) => {
        let dbase = db.db(this.sql)
        if (insertMany) {
          dbase.collection(this.collection).insertMany(documents, (err, res) => {
            if (err) {
              reject(err)
              return 
            } else {
              resolve(res)
            }

          })
        } else {
          dbase.collection(this.collection).insertOne(documents, (err, res) => {
            if (err) {
              reject(err)
              return
            } else {
              resolve(res)
            }
          })
        }
        db.close()
      })
    })
  }
  /**
   * 删除数据库
   * @param {Object || Array} filter 
   * @param {Boolean} deleteMany 
   */
  del(filter, deleteMany) {
    return new Promise((resolve, reject) => {
      this._initConnect().then((db) => {
        let dbase = db.db(this.sql)
        if (deleteMany) {
          dbase.collection(this.collection).deleteMany(filter, (err, res) => {
            if (err) {
              reject(err)
              return 
            } else {
              resolve(res)
            }
          })
        } else {
          dbase.collection(this.collection).deleteOne(filter, (err, res) => {
            if (err) {
              reject(err)
              return
            } else {
              resolve(res)
            }
          })
        }
        db.close()
      })
    })
  }
  /**
   * 更新数据
   * @param {Object || Array} whereStr 
   * @param {Object} updateStr 
   * @param {Boolean} updateMany 
   */
  update(whereStr, updateStr, updateMany) {
    return new Promise((resolve, reject) => {
      this._initConnect().then((db) => {
        let dbase = db.db(this.sql)
        if (updateMany) {
          dbase.collection(this.collection).updateMany(whereStr, updateStr,(err, res) => {
            if (err) {
              reject(err)
              return 
            } else {
              resolve(res)
            }
          })
        } else {
          dbase.collection(this.collection).updateOne(whereStr, updateStr, (err, res) => {
            if (err) {
              reject(err)
              return
            } else {
              resolve(res)
            }
          })
        }
        db.close()
      })
    })
  }
  /**
   * 查询
   * @param {Object} whereStr 
   * @param {Number} numOfPage 
   * @param {Number} skip 
   */
  search(whereStr = {}, numOfPage = 5, pageIndex = 0) {
    return new Promise((resolve, reject) => {
      this._initConnect().then(db => {
        let dbase = db.db(this.sql)
        dbase
        .collection(this.collection)
        .find(whereStr)
        //天坑 limit不能等于0
        .limit(numOfPage)
        .skip(pageIndex * numOfPage)
        .toArray((err, result) => {
          if (err) {
            reject(err)
            return 
          } else {
            resolve(result)
          }
        })
        db.close()
      })
    })
  }
  /** 
   * 数据库存储数量
   * @param
  */
  count() {
    return new Promise((resolve, reject) => {
      this._initConnect().then(db => {
        let dbase = db.db(this.sql)
        dbase.collection(this.collection).count().then((count) => {
          resolve(count)
        })
        db.close()
      })  
    })
  }
}

module.exports = Dao