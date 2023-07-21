import { describe, expect, it } from "vitest";
import { createRowItems } from "../squareGrid/functions/createRowItems";

describe("createRowItems", () => {
  it("should work", () => {
    const rowCount = 3;
    const maxHorizontalTiles = 7;

    const result = createRowItems(rowCount, maxHorizontalTiles);
    expect(result).toMatchInlineSnapshot(`
      [
        {
          "first": 0,
          "last": 6,
        },
        {
          "first": 7,
          "last": 12,
        },
        {
          "first": 13,
          "last": 19,
        },
        {
          "first": 20,
          "last": 25,
        },
      ]
    `);
  });
});
