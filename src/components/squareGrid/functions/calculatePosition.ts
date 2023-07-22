import { type RowItem } from "../SquareGrid";

export const calculatePosition = (i: number, rowItems: RowItem[]) => {
  const yRange = rowItems.findIndex((item) => {
    const firstHexInRange = item.first;
    const lastHexInRange = item.last;

    return (
      firstHexInRange &&
      lastHexInRange &&
      i >= firstHexInRange &&
      i <= lastHexInRange
    );
  });

  const yMultiplier = yRange === -1 ? 0 : yRange;

  const xRange = rowItems[yMultiplier]?.first ?? 0;
  const xMultiplier = i - xRange + (yMultiplier % 2 == 0 ? 0 : 0.5);

  return { xPosition: xMultiplier, yPosition: yMultiplier };
};
