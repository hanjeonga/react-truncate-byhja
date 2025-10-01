import React from "react";

type BaseTextProps = {
  children?: string;
  size?: number | string;
  weight?: number | "normal" | "bold" | "lighter";
  color?: string;
  style?: React.CSSProperties;
  truncateText?: string;
  countSpaces?: boolean;
};

type LengthProps = BaseTextProps & {
  viewLength?: number;
  viewLine?: never;
  width?: never;
};

type LineProps = BaseTextProps & {
  viewLine?: number;
  width?: number | string;
  viewLength?: never;
};

type BothProps = BaseTextProps & {
  viewLength: number;
  viewLine: number;
  width: number | string;
};

type DefaultProps = BaseTextProps & {
  viewLength?: never;
  viewLine?: never;
  width?: never;
};

export type TextProps = LengthProps | LineProps | BothProps | DefaultProps;

export const Typography: React.FC<TextProps> = ({
  children = "기본 텍스트입니다.",
  size = "16px",
  weight = "normal",
  color = "#000",
  style,
  viewLength,
  viewLine,
  truncateText = "…",
  width,
  countSpaces = true,
}) => {
  let displayText = children;

  // 글자 수 제한 적용
  if (viewLength) {
    const targetText = countSpaces
      ? children
      : children.replace(/[\s\n\r\t]/g, "");

    if (targetText.length > viewLength) {
      let cutLength = viewLength;

      if (!countSpaces) {
        let count = 0;
        let realIndex = 0;
        while (count < viewLength && realIndex < children.length) {
          if (!/[\s\n\r\t]/.test(children[realIndex])) {
            count++;
          }
          realIndex++;
        }
        cutLength = realIndex;
      }

      displayText = children.slice(0, cutLength) + truncateText;
    }
  }

  const customStyle: React.CSSProperties = {
    fontSize: typeof size === "number" ? `${size}px` : size,
    fontWeight: weight,
    color,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: viewLength && !viewLine ? "nowrap" : undefined,
    display: viewLine ? "-webkit-box" : "inline-block",
    ...(viewLine
      ? {
          WebkitLineClamp: viewLine,
          WebkitBoxOrient: "vertical",
          width: typeof width === "number" ? `${width}px` : width,
        }
      : {}),
    ...(style || {}),
  };

  return <span style={customStyle}>{displayText}</span>;
};
