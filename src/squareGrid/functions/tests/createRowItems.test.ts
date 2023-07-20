import { describe, expect, it } from "vitest";
import { calculateRowCount } from "../calculateRowCount";
import { createRowItems } from "../createRowItems";

describe("createRowItems", () => {
  it("should work", () => {
    const rowCount = 3;
    const maxHorizontalTiles = 7;

    const result = createRowItems(rowCount, maxHorizontalTiles);
    expect(result).toMatchInlineSnapshot(`
      [
        {
          "first": 1,
          "last": 7,
        },
        {
          "first": 8,
          "last": 13,
        },
        {
          "first": 14,
          "last": 20,
        },
      ]
    `);
  });
});
