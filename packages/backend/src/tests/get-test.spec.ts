import { getTest } from "../get-test";

describe("getTest", () => {

  test("returns success true", () => {
    expect(getTest().success).toBe(true);
  });

});
