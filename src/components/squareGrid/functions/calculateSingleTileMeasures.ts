/**
 *
 * @param tileSideLengths
 * @param tileElevations
 * @param tileGap
 * @returns singleTileWidth, singleTileHeight, tileWidth, tileHeight
 */
export const calculateSingleTileMeasures = (
  tileSideLengths: number,
  tileElevations: number,
  tileGap: number
) => {
  const singleTileWidth = Math.sqrt(3) * tileSideLengths;
  const singleTileHeight = 2 * tileSideLengths + tileElevations;
  const tileTotalWidth = singleTileWidth + tileGap;
  const tileTotalHeight = (3 * tileSideLengths) / 2 + tileElevations + tileGap;

  return {
    singleTileWidth,
    singleTileHeight,
    tileTotalWidth,
    tileTotalHeight,
  };
};
