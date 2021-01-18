import { Response as ExpressResponse } from 'express'
import Setup from "./setup";

export default class Response {
  private readonly _response

  constructor(response: ExpressResponse) {
    this._response = response
  }

  respond(resemble: Setup): void {
    this._response.send('hello world')
  }
}
