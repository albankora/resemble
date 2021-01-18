import Request from './request'
import Response from './response'

export default class Setup {

  private readonly _data: any;
  private _request: any;
  private _response: any;

  constructor(data: any, request: Request, response: Response) {
    this._data = data
    this._request = request
    this._response = response
  }

  resemble(): any {
    return ''
  }

  hasSameMethodAsRequest(): boolean {
    return this._data.method === this._request.method()
  }

  route() {
    return this._data.route
  }
}
