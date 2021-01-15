import { Request as ExpressRequest } from 'express'

export default class Request {
  private readonly _body
  private readonly _headers
  private readonly _uri
  private readonly _method

  constructor(body: any, method: any, headers: any, uri: any) {
    this._body = body
    this._method = method
    this._headers = headers
    this._uri = uri
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
    return this._uri.split('/')[0]
  }

  check(artifact: string) {
    return true
  }

  route(): string {
    return ''
  }
}
