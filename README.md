# messageBoard
高仿bilibili 部分pc端的一个简易留言板项目, 前端采用Vuejs,后端采用nodejs, 数据库使用mongodb
功能包括上传留言, 翻页 , 精确定位页面和点赞功能, 

##页面结构
```
|-comment
  |-comment.js     //评论构造函数
|-config
  |-config.js      //数据库配置文件
|-dao
  |-dao.js         //基于Promise, mongodb手动封装的一个数据库增删改查接口
|-mock
  |-mock.js        //并非采取线上真实数据, 评论类容为假数据
|-static           //静态资源文件
|-utils
  |-utils.js       //工具函数
|-.gitignore
|-app.js           //入口文件
|-init.js          //初始化数据库, 为数据库添加200条评论列表
|-package.json     //项目文件
|-README.md        //使用说明
```

##如何使用

`$ git clone https://github.com/yusifeng/messageBoard.git`

`cd messageBoard`

`npm install` or `cnpm install`

`node init.js`

`node app.js`

##项目截图

![image](/static/asset/image/ceshi.png)
