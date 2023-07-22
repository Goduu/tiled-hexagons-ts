import { createRowItems } from "components/squareGrid/functions/createRowItems"
import { describe, expect, it } from "vitest"

describe("createRowItems", () => {
  it("should create row items correctly", () => {
    const rowCount = 3
    const maxHorizontalTiles = 7

    const result = createRowItems(rowCount, maxHorizontalTiles)
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
    `)
  })
})
