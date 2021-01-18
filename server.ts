import express, {json, urlencoded} from 'express'
import Request from './server/request'
import Response from './server/response'
import Finder from "./server/finder";
import Loader from "./server/loader";

const server: express.Application = express()

server.use(json())
server.use(urlencoded())

server.all('*', function (req, res) {
  try {
    const request = new Request(req.originalUrl, req.body, req.method, req.headers)
    const setups = (new Loader(request, new Response(res))).loadServiceResembleCollection()
    const setup = (new Finder(request)).findTheRightResembleFrom(setups)
    setup.resemble()
  } catch (e) {
    res.status(500).json({
      status: {
        code: 500,
        message: e.message
      }
    })
  }
})

module.exports = server
