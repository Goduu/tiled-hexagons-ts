import { calculateRowCount } from "components/squareGrid/functions/calculateRowCount"
import { describe, expect, it } from "vitest"

describe("calculateRowCount", () => {
  it("should calculate row count correctly", () => {
    const tileCount = 10
    const maxHorizontal = 2

    const result = calculateRowCount(tileCount, maxHorizontal)
    expect(result).toBe(7)
  })
})
