import Resemble from "./resemble";
import fs from "fs";
import Request from "./request";
import Response from "./response";

export default class ResembleLoader {
  private readonly request
  private readonly response

  constructor(request: Request, response: Response) {
    this.request = request
    this.response = response
  }

  allServiceResembles(): Array<Resemble> {
    let resembles: Array<Resemble> = []
    const path = '../resemblances/' + this.request.service() + "/"
    if (!fs.existsSync(path)) {
      throw new Error("Resemble service not found!!!")
    }

    let files = fs.readdirSync(path);

    for (let i in files) {
      let resemble = new Resemble(JSON.parse(files[i]), this.request, this.response)
      if (resemble.hasSameMethodAsRequest()) {
        resembles.push(resemble)
      }
    }

    return resembles
  }
}
