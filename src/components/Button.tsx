import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  type?: "button" | "submit" | "reset";
  className: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const Button = ({
  children,
  type = "button",
  onClick = () => {},
  ...rest
}: Props) => {
  return (
    <button type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
