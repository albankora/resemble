import fs from "fs";
import Setup from "./setup";
import Request from "./request";
import Response from "./response";

export default class Loader {
  private readonly request
  private readonly response

  constructor(request: Request, response: Response) {
    this.request = request
    this.response = response
  }

  loadServiceResembleCollection(): Array<Setup> {
    let resembles: Array<Setup> = []
    console.log(this.request.service())
    const path = '../../setup/' + this.request.service() + "/"
    if (!fs.existsSync(path)) {
      throw new Error("Resemble service not found!!!")
    }

    let files = fs.readdirSync(path);

    for (let i in files) {
      let resemble = new Setup(JSON.parse(files[i]), this.request, this.response)
      if (resemble.hasSameMethodAsRequest()) {
        resembles.push(resemble)
      }
    }

    return resembles
  }
}
