export default class Request {
  private readonly _body
  private readonly _headers
  private readonly _uri
  private readonly _method

  constructor(uri: any = null, body: any = null, method: any = null, headers: any = null) {
    this._uri = uri
    this._body = body
    this._method = method
    this._headers = headers
  }

  body(): any {
    return this._body
  }

  header(key: string): any {
    return this._headers[key]
  }

  method(): string {
    return this._method.toLowerCase()
  }

  service(): string {
    if (typeof this._uri !== "string") {
      throw new Error("Invalid type for Request URI!!!")
    }

    return this._uri.replace(/^\//g, '').split('/')[0]
  }

  check(artifact: string) {
    return true
  }

  route(): string {
    return ''
  }
}
