import { type CSSProperties, useMemo } from "react";

export type HexagonStyle = CSSProperties & {
  elevation?: {
    cursor: string;
    transform: string;
  };
  hover?: CSSProperties;
  active?: CSSProperties;
  normal?: CSSProperties;
};

export interface HexagonStyles {
  thHexagonStyleNormal: HexagonStyle;
  thHexagonStyleHover: HexagonStyle;
  thHexagonStyleActive: HexagonStyle;
}

export const useHExagonStyles = (
  elevation: number,
  strokeWidth: CSSProperties["strokeWidth"],
  stroke?: CSSProperties["stroke"],
  normal?: CSSProperties,
  hover?: CSSProperties,
  active?: CSSProperties
) => {
  const styles = useMemo(() => {
    const thHexagonStyleBase: HexagonStyle = {
      userSelect: "none",
      stroke,
      strokeWidth: `${strokeWidth}px`,
      transition: "all 0.2s ease",
    };

    return {
      thHexagonStyleNormal: { ...thHexagonStyleBase, normal },
      thHexagonStyleHover: {
        ...thHexagonStyleBase,
        cursor: "pointer",
        transform: `translateY(${elevation / 2}px)`,
        hover,
      },
      thHexagonStyleActive: {
        ...thHexagonStyleBase,
        cursor: "pointer",
        transition: "all 0.1s ease",
        transform: `translateY(${elevation}px)`,
        active,
      },
    };
  }, [
    active,
    elevation,
    hover,
    normal,
    stroke,
    strokeWidth,
  ]) satisfies HexagonStyles;

  return styles;
};
