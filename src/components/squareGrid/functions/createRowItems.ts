import { type RowItem } from "../SquareGrid";

/**
 *
 * @param rowCount - tile rows
 * @param maxHorizontalTiles - max horizontal elements pre row
 * @returns rowItems representing the elements in a row
 * e.g. [0,4] means that in this row the elements 0,1,2,3,4 will be present
 */
export const createRowItems = (
  rowCount: number,
  maxHorizontalTiles: number
): RowItem[] => {
  const rowItems: RowItem[] = [{ first: 0, last: maxHorizontalTiles - 1 }];
  if (maxHorizontalTiles == 1) {
    return Array(rowCount)
      .fill(0)
      .map((_, i) => {
        return { first: i, last: i };
      });
  }

  for (let c = 1; c <= rowCount; c++) {
    const evenOddModifier = c % 2 == 0 ? 0 : -1;
    const lastItem = rowItems.at(-1);

    lastItem &&
      rowItems.push({
        first: lastItem?.last + 1,
        last: lastItem?.last + maxHorizontalTiles + evenOddModifier,
      });
  }

  return rowItems;
};
