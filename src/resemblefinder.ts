import Resemble from "./resemble"
import Request from './request'

export default class ResembleFinder {
  private request: Request

  constructor(request: Request) {
    this.request = request
  }

  findTheRightResemble(resembles: Array<Resemble>): Resemble {

    let routes: Array<string> = []
    for (let i in resembles) {
      routes[i] = resembles[i].route()
    }

    routes = Object.keys(routes).sort(function (a, b) {
      return b.length - a.length;
    })

    let found = null
    for (let i = 0; i < routes.length; i++) {
      let regxPath = new RegExp("^" + routes[i].replace(/:[^\s/]+/g, '([\\w-]+)') + "$");
      found = this.request.route().match(regxPath);
      if (found) {
        return resembles[i]
      }
    }

    throw new Error("Resemble was not found!!!")
  }
}
