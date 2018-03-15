module.exports = class Comment {
    constructor({
        name: name,
        content: content,
        vipLevel: vipLevel,
        avatar: avatar,
        floor: floor,
        commentTime: commentTime,
        id: id
    }) {
        this.name = name
        this.content = content
        this.likeNum = 0
        this.dislikeNum = 0
        this.vipLevel = vipLevel
        this.avatar = avatar
        this.floor = floor
        this.commentTime = commentTime
        this.id = id
    }
}