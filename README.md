<<<<<<< HEAD
### messageBoard
基于Vue + mongodb/json-server + express 的一款简易bilibili评论模块, 涉**点赞, 评论, 翻页, 跳转**简单功能,  

- #### 项目结构

=======
# messageBoard
高仿bilibili 部分pc端的一个简易留言板项目, 前端采用Vuejs,后端采用nodejs, 数据库使用mongodb
功能包括上传留言, 翻页 , 精确定位页面和点赞功能, 

##页面结构
>>>>>>> 483c228465d0457d1acebb8a0fa13194703bcbc9
```
|-comment
  |-comment.js     				//评论构造函数
|-config
  |-config.js      				//数据库配置文件
|-dao
<<<<<<< HEAD
  |-dao.js        			 	//基于Promise, mongodb手动封装的一个数据库增删改查借口
=======
  |-dao.js         //基于Promise, mongodb手动封装的一个数据库增删改查接口
>>>>>>> 483c228465d0457d1acebb8a0fa13194703bcbc9
|-mock
  |-mock.js        				//并非采取线上真实数据, 评论类容为假数据
|-static           				//静态资源文件
|-utils
  |-utils.js       				//工具函数
|-.gitignore
|-db.json		   				//json-server数据库文件
|-josn_server.js   				//开启json-server数据库服务, 类似于在cmd中开启mongod
|-josn_server_app.js           	//以json-server为后台的入口文件
|-init.js          				//初始化数据库, 为数据库添加200条评论列表
|-mongodb_app.js  				//以mongodb为数据库的入口文件
|-package.json     				//项目文件
|-README.md        				//使用说明

```

<<<<<<< HEAD
- #### 下载使用
=======
##如何使用
>>>>>>> 483c228465d0457d1acebb8a0fa13194703bcbc9

`$ git clone https://github.com/yusifeng/messageBoard.git`

`$ cd messageBoard`

`$ npm install` or `cnpm install`

1. 以mongodb为数据库启动

   `$ node mongodb_app.js`

2. 以json-server为数据库启动

   `$ node json_server_app.js`

- #### 项目地址

<<<<<<< HEAD
[高仿bilibili评论区](http://106.12.5.207:3001)
=======
##项目截图

![image](/static/asset/image/ceshi.png)
>>>>>>> 483c228465d0457d1acebb8a0fa13194703bcbc9
