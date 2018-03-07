module.exports = class Comment {
    constructor({
        name: name,
        comment: comment,
        vipLevel: vipLevel,
        avatar: avatar,
        floor: floor
    }) {
        this.name = name
        this.comment = comment
        this.likeNum = 0
        this.dislikeNum = 0
        this.vipLevel = vipLevel
        this.avatar = avatar
        this.floor = floor
    }
}