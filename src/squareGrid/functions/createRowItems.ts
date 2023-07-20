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
  const rowItems: RowItem[] = [];
  let last = 0;

  for (let c = 0; c < rowCount; c++) {
    const evenOddModifier = c % 2 === 0 ? 0 : -1;
    const first = last + 1;
    last = first + maxHorizontalTiles + evenOddModifier - 1;
    rowItems.push({ first, last });
  }

  return rowItems;
};
