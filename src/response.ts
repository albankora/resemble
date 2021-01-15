import { Response as ExpressResponse } from 'express'
import Resemble from "./resemble";

export default class Response {
  private readonly _response

  constructor(response: ExpressResponse) {
    this._response = response
  }

  respond(resemble: Resemble): void {
    this._response.send('hello world')
  }
}
