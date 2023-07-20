import React, { type CSSProperties, type FC } from "react";
import { Hexagon } from "../hexagons/Hexagon";
import { createRowItems } from "./functions/createRowItems";
import { calculateRowCount } from "./functions/calculateRowCount";
import { calculatePosition } from "./functions/calculatePosition";
import { calculateSquareGridDimensions } from "./functions/calculateSquareGridDimensions";
import { calculateSingleTileMeasures } from "./functions/calculateSingleTileMeasures";
export interface RowItem {
  first: number;
  last: number;
}

export interface SquareGridProps {
  tiles: {
    fill?: CSSProperties["fill"];
    stroke?: CSSProperties["stroke"];
    shadow?: string;
    img?: string;
    text?: string;
    textStyle?: {
      font?: CSSProperties["font"];
      fontFamily?: CSSProperties["fontFamily"];
      fontSize?: CSSProperties["fontSize"];
      fill?: CSSProperties["fill"];
    };
    styles?: { normal?: object; hover?: object; active?: object };
    href?: string;
    target?: string;
    onClick?: () => void;
  }[];
  tileSideLengths: number;
  tileBorderRadii?: number;
  tileElevations?: number;
  tileStrokeWidths?: number;
  tileGap?: number;
  tileStyles?: { normal?: object; hover?: object; active?: object };
  tileTextStyles?: {
    font?: CSSProperties["font"];
    fontFamily?: CSSProperties["fontFamily"];
    fontSize?: CSSProperties["fontSize"];
    fill?: CSSProperties["fill"];
  };
  maxHorizontal?: number;
}

export const SquareGrid: FC<SquareGridProps> = ({
  tiles,
  tileSideLengths = 100,
  tileBorderRadii = 12,
  tileElevations = 12,
  tileStrokeWidths = 0,
  tileGap = 4,
  maxHorizontal: maxHorizontalTiles = 5,
  tileStyles,
  tileTextStyles,
}) => {
  const tileCount = tiles.length;
  const rowsCount = calculateRowCount(tileCount, maxHorizontalTiles);
  const { singleTileWidth, singleTileHeight, tileTotalWidth, tileTotalHeight } =
    calculateSingleTileMeasures(tileSideLengths, tileElevations, tileGap);
  const { squareGridWidth, squareGridHeight } = calculateSquareGridDimensions(
    tileTotalWidth,
    tileCount,
    maxHorizontalTiles,
    tileGap,
    rowsCount,
    tileTotalHeight,
    singleTileHeight
  );

  const rowItems = createRowItems(rowsCount, maxHorizontalTiles);

  return (
    <svg width={squareGridWidth} height={squareGridHeight}>
      {tiles.map(
        (
          {
            fill,
            stroke,
            shadow,
            img,
            text,
            textStyle,
            styles,
            href,
            target,
            onClick,
          },
          index
        ) => {
          const { xPosition, yPosition } = calculatePosition(index, rowItems);
          const mergedStyles = {
            ...tileStyles,
            ...styles,
          };

          return (
            <svg
              key={index}
              x={xPosition * tileTotalWidth}
              y={yPosition * tileTotalHeight}
              width={singleTileWidth}
              height={singleTileHeight}
            >
              <Hexagon
                sideLength={tileSideLengths}
                borderRadius={tileBorderRadii}
                elevation={tileElevations}
                img={img}
                text={text}
                textStyle={{ ...tileTextStyles, ...textStyle }}
                styles={mergedStyles}
                fill={fill}
                stroke={stroke}
                strokeWidth={tileStrokeWidths}
                shadow={shadow}
                href={href}
                target={target}
                onClick={onClick}
              />
            </svg>
          );
        }
      )}
    </svg>
  );
};
