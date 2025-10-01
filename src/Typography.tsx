import React from "react";

type BaseTextProps = {
  children?: string;
  size?: number | string;
  weight?: number | "normal" | "bold" | "lighter";
  color?: string;
  style?: React.CSSProperties;
  truncateText?: string;
  countSpaces?: boolean; // 띄어쓰기/줄바꿈 포함 여부 (기본 true)
};

// 글자 수 제한 모드
type LengthProps = BaseTextProps & {
  viewLength: number;
  viewLine?: never;
  width?: never;
};

// 줄 수 제한 모드
type LineProps = BaseTextProps & {
  viewLine: number;
  width: number | string; // ✅ 필수
  viewLength?: never;
};

// 제한 없는 기본 모드
type DefaultProps = BaseTextProps & {
  viewLength?: never;
  viewLine?: never;
  width?: never;
};

export type TextProps = LengthProps | LineProps | DefaultProps;

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

  // 글자수 제한 모드
  if (viewLength) {
    // 스페이스/줄바꿈/탭 제거 후 길이 계산
    const targetText = countSpaces
      ? children
      : children.replace(/[\s\n\r\t]/g, ""); // ✅ 공백류 제거

    if (targetText.length > viewLength) {
      let cutLength = viewLength;

      if (!countSpaces) {
        // 실제 children에서 index 찾아내기
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
    whiteSpace: viewLength ? "nowrap" : undefined,
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
