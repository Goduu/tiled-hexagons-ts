import { describe, expect, it } from "vitest";
import { calculateRowCount } from "../squareGrid/functions/calculateRowCount";

describe("calculateRowCount", () => {
  it("should work", () => {
    const tileCount = 10;
    const maxHorizontal = 2;

    const result = calculateRowCount(tileCount, maxHorizontal);
    expect(result).toBe(7);
  });
});
