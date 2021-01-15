import dotenv from 'dotenv'
const server = require('./server')

dotenv.config()

server.listen(process.env.APP_PORT, function () {
  console.log('Server listen to port: %s', process.env.APP_PORT)
})
