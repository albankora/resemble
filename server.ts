import express, {json, urlencoded} from 'express'
import Request from './src/request'
import Response from './src/response'
import ResembleFinder from "./src/resemblefinder";
import ResembleLoader from "./src/resembleloader";

const server: express.Application = express()

server.use(json())
server.use(urlencoded())

server.all('*', function (req, res) {
  try {
    const request = new Request(req.body, req.method, req.headers, req.originalUrl)
    const resembleLoader = new ResembleLoader(request, new Response(res))
    const resembleFinder = new ResembleFinder(request)
    const resemble = resembleFinder.findTheRightResemble(resembleLoader.allServiceResembles())
    resemble.run()
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
