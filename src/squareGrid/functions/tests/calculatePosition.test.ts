import { describe, expect, it } from "vitest";
import { calculatePosition } from "../calculatePosition";
import { RowItem } from "../../SquareGrid";

describe("calculatePosition", () => {
  it("should work", () => {
    const rowItems: RowItem[] = [
      { first: 0, last: 2 },
      { first: 3, last: 5 },
      { first: 6, last: 8 },
    ];
    const result = calculatePosition(1, rowItems);
    expect(result).toMatchInlineSnapshot(`
      {
        "xPosition": 1,
        "yPosition": 0,
      }
    `);

    // TODO improve here
    const result2 = calculatePosition(100, rowItems);
    expect(result2).toMatchInlineSnapshot(`
      {
        "xPosition": 100,
        "yPosition": 0,
      }
    `);
  });
});
