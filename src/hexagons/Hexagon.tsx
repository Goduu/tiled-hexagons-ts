import React, {
  useState,
  FC,
  CSSProperties,
  HTMLAttributeAnchorTarget,
} from "react";
import { HexagonVector } from "./HexagonVector";
import { generateHexDPath } from "./generateHexSVG";
import { type HexagonStyle, useHExagonStyles } from "./useHexagonStyles";

export interface HexagonProps {
  elevation: number;
  stroke: CSSProperties["stroke"];
  strokeWidth: CSSProperties["strokeWidth"];
  styles: {
    normal?: CSSProperties;
    hover?: CSSProperties;
    active?: CSSProperties;
  };
  shadow?: CSSProperties["color"];
  href?: HTMLAnchorElement["href"];
  target?: HTMLAttributeAnchorTarget;
  sideLength?: number;
  borderRadius?: number;
  img?: string;
  text?: string;
  textStyle?: {
    font?: CSSProperties["font"];
    fontFamily?: CSSProperties["fontFamily"];
    fontSize?: CSSProperties["fontSize"];
  };
  fill: CSSProperties["fill"];
  onClick?: () => void;
}

export const Hexagon: FC<HexagonProps> = ({
  elevation = 12,
  stroke = "#bbb",
  strokeWidth = 0,
  styles: { normal, hover, active },
  shadow = "#e2e2e2",
  href,
  target,
  sideLength = 100,
  borderRadius = 12,
  img,
  text = "",
  textStyle,
  fill = "#fff",
  onClick = () => null,
}) => {
  const { thHexagonStyleNormal, thHexagonStyleHover, thHexagonStyleActive } =
    useHExagonStyles(elevation, strokeWidth, stroke, normal, hover, active);

  const [thHexagonStyle, setThHexagonStyle] =
    useState<HexagonStyle>(thHexagonStyleNormal);

  const width = Math.sqrt(3) * sideLength;
  const height = 2 * sideLength + elevation;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      <svg y={elevation}>
        <path fill={shadow} d={generateHexDPath(sideLength, borderRadius)} />
      </svg>
      <g
        style={thHexagonStyle}
        onMouseOver={() => setThHexagonStyle(thHexagonStyleHover)}
        onMouseLeave={() => setThHexagonStyle(thHexagonStyleNormal)}
        onMouseDown={() => setThHexagonStyle(thHexagonStyleActive)}
        onMouseUp={() => setThHexagonStyle(thHexagonStyleHover)}
        onClick={onClick}
      >
        {!href ? (
          <HexagonVector
            sideLength={sideLength}
            borderRadius={borderRadius}
            elevation={elevation}
            img={img}
            text={text}
            textStyle={textStyle}
            fill={fill}
          />
        ) : (
          <a href={href} target={target ?? "_blank"}>
            <HexagonVector
              sideLength={sideLength}
              borderRadius={borderRadius}
              elevation={elevation}
              img={img}
              text={text}
              textStyle={textStyle}
              fill={fill}
            />
          </a>
        )}
      </g>
    </svg>
  );
};
