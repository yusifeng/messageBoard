let jsServer = require('json-server')
const server = jsServer.create()
const router = jsServer.router('db.json')
const middlewares = jsServer.defaults()

server.use(middlewares)
server.use(router)


server.listen(27017, () => {
  console.log('running at port 27017')
})
