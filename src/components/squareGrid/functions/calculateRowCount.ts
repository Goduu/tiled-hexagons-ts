/**
 *
 * @param tileCount -
 * @param maxHorizontal - ma horizontal items
 * @returns
 */
export const calculateRowCount = (tileCount: number, maxHorizontal: number) => {
  if (maxHorizontal == 1) return tileCount;
  let columnCount = 0;
  let i = 0;
  while (i <= tileCount) {
    i += columnCount % 2 == 0 ? maxHorizontal : maxHorizontal - 1;
    columnCount++;
  }
  return columnCount;
};
