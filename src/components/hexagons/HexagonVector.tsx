import { CSSProperties, FC } from "react";
import { generateHexDPath } from "./generateHexSVG";

export interface HexagonVectorProps {
  sideLength: number;
  borderRadius: number;
  elevation: number;
  img?: string;
  text?: string;
  textStyle?: {
    font?: CSSProperties["font"];
    fontFamily?: CSSProperties["fontFamily"];
    fontSize?: CSSProperties["fontSize"];
  };
  fill?: CSSProperties["fill"];
}

export const HexagonVector: FC<HexagonVectorProps> = ({
  sideLength,
  borderRadius,
  elevation,
  img,
  text,
  textStyle,
  fill,
}) => {
  const width = Math.sqrt(3) * sideLength;
  const height = 2 * sideLength + elevation;

  const fontSizeOffset = textStyle?.fontSize
    ? 0.3 * parseInt(`${textStyle.fontSize}`)
    : 0;

  return (
    <>
      <path fill={fill} d={generateHexDPath(sideLength, borderRadius)} />
      <image
        href={img}
        width={0.7 * width}
        height={0.7 * height}
        x={0.15 * width}
        y={0.12 * height}
      />
      <text fill="#bbb" strokeWidth="0" style={textStyle}>
        <tspan
          x={width / 2}
          y={height / 2 + fontSizeOffset}
          textAnchor="middle"
        >
          {text}
        </tspan>
      </text>
    </>
  );
};
