/**
 *
 * @param tileCount -
 * @param maxHorizontal - ma horizontal items
 * @returns
 */
export const calculateRowCount = (tileCount: number, maxHorizontal: number) => {
  if (maxHorizontal === 1) {
    return tileCount;
  }

  return Math.ceil(tileCount / maxHorizontal);
};
