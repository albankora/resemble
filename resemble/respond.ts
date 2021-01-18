import Request from "../server/request";
import Response from "../server/response";
import {Resemble} from "./resemble";

export default class Respond implements Resemble {
  private request
  private response
  private readonly next

  constructor(request: Request, response: Response, next: Resemble | null) {
    this.request = request
    this.response = response
    this.next = next
  }

  run(context: any) {
    console.log('I am Respond!!!')

    if (this.next instanceof Resemble) {
      this.next.run(context)
    }
  }
}
