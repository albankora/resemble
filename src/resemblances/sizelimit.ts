import Request from "../request";
import Response from "../response";

export default class SizeLimit implements Resemblance {
private request
private response
private readonly next

  constructor(request: Request, response: Response, next: Resemblance | null) {
    this.request = request
    this.response = response
    this.next = next
  }

  run(context: any) {
    console.log('I am SizeLimit!!!')

    if (this.next instanceof Resemblance) {
      this.next.run(context)
    }
  }
}