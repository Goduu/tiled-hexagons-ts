export const calculateSquareGridDimensions = (
  tileWidth: number,
  tileCount: number,
  maxHorizontalTiles: number,
  tileGap: number,
  rowCount: number,
  tileHeight: number,
  singleTileHeight: number
) => {
  const squareGridWidth =
    tileWidth *
    (maxHorizontalTiles == 1 ? 1.5 : Math.min(tileCount, maxHorizontalTiles));
  const squareGridHeight =
    singleTileHeight + tileGap + (rowCount - 1) * tileHeight;

  return {
    squareGridWidth,
    squareGridHeight,
  };
};
