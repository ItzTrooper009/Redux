import { isEven } from "./math";

describe("isEven", () => {
  it("should return true if given a even number", () => {
    const result = isEven(4);
    expect(result).toEqual(true);
  });

  it("should return false if given a odd number", () => {
    const result = isEven(5);
    expect(result).toEqual(false);
  });
});
