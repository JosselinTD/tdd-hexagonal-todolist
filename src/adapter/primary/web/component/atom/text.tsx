import { CSSProperties, PropsWithChildren } from "react";

interface TextProps extends PropsWithChildren {
  isCrossedOut?: boolean;
}

const textStyle: CSSProperties = {
  userSelect: "none",
};

const crossedTextStyle: CSSProperties = {
  ...textStyle,
  textDecoration: "line-through",
  color: "#9ca3af",
};

export const Text = ({ children, isCrossedOut = false }: TextProps) => {
  return (
    <span
      className="ml-4 text-sm"
      style={isCrossedOut ? crossedTextStyle : textStyle}
    >
      {children}
    </span>
  );
};
