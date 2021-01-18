import Request from './request'

describe("Extract service from the request URI", () => {
  it("must return the first part of the uri", () => {
    let service = (new Request("/foo/bazz/")).service()
    expect(service).toBe("foo")

    service = (new Request("buzz/bazz")).service()
    expect(service).toBe("buzz")
  })
});
