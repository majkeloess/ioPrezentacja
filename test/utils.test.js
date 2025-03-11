import { getRandomString } from "../utils";

describe("getRandomString", () => {
  it("should return a string of the specified length", () => {
    const length = 10;

    const result = getRandomString(length);

    expect(result).toHaveLength(length);
  });
});
