// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()

const path = require('path')

const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

const port = process.env.PORT || 3000;

server.use(middlewares)
server.use(router)


server.listen(3000, () => {
  console.log('JSON Server is running')
})