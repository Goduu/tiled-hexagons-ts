import { calculateSquareGridDimensions } from "components/squareGrid/functions/calculateSquareGridDimensions"
import { describe, expect, it } from "vitest"

describe("calculateSquareGridDimensions", () => {
  it("should calculate square grid dimensions correctly", () => {
    const tileWidth = 100
    const tileCount = 10
    const maxHorizontalTiles = 5
    const tileGap = 4
    const rowCount = 3
    const tileHeight = 50
    const singleTileHeight = 46

    const result = calculateSquareGridDimensions(
      tileWidth,
      tileCount,
      maxHorizontalTiles,
      tileGap,
      rowCount,
      tileHeight,
      singleTileHeight,
    )
    expect(result).toMatchInlineSnapshot(`
      {
        "squareGridHeight": 150,
        "squareGridWidth": 500,
      }
    `)
  })
})
