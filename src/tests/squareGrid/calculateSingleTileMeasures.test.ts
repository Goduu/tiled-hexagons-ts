import { calculateSingleTileMeasures } from "components/squareGrid/functions/calculateSingleTileMeasures"
import { describe, expect, it } from "vitest"

describe("calculateSingleTileMeasures", () => {
  it("should calculate single tile measures correctly", () => {
    const tileSideLengths = 100
    const tileElevations = 12
    const tileGap = 5

    const result = calculateSingleTileMeasures(tileSideLengths, tileElevations, tileGap)

    expect(result).toMatchInlineSnapshot(`
      {
        "singleTileHeight": 212,
        "singleTileWidth": 173.20508075688772,
        "tileTotalHeight": 167,
        "tileTotalWidth": 178.20508075688772,
      }
    `)
  })
})
