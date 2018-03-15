module.exports = class Comment {
    constructor({
        name: name,
        content: content,
        vipLevel: vipLevel,
        avatar: avatar,
        floor: floor,
<<<<<<< HEAD
        commentTime: commentTime,
        id: id
=======
        commentTime: commentTime
>>>>>>> 483c228465d0457d1acebb8a0fa13194703bcbc9
    }) {
        this.name = name
        this.content = content
        this.likeNum = 0
        this.dislikeNum = 0
        this.vipLevel = vipLevel
        this.avatar = avatar
        this.floor = floor
        this.commentTime = commentTime
<<<<<<< HEAD
        this.id = id
=======
>>>>>>> 483c228465d0457d1acebb8a0fa13194703bcbc9
    }
}