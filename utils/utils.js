// export const randomStr = function (min, max) {
//     

// }


let utils = Object.create(null)

/**
 * 获取介于最小值与最大值的随机数
 * @param {Number} min 
 * @param {Number} max 
 */
utils.getRandomInt = function(min, max) {
    let { random, floor } = Math
    return floor(random() * (max - min + 1) + min)
}

/**
 * 获取随机位于最大值和最小值的字符串
 * @param {Number} min 
 * @param {Number} max 
 */
utils.getRandomString = function (min, max) {
    let _ = '0123456789qwertyuiopasdfghjklzxcvbnm'.split('')
    // console.log(_)
    let charNum = this.getRandomInt(min, max)
    let strArray = []
    for(let i = 0; i < charNum; i ++) {
        strArray.push(_[this.getRandomInt(0, _.length) - 1])
    }
    return strArray.join('')

}

module.exports = utils

