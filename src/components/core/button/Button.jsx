import { colorMapper } from "./constants/colorMapper";

export const Button = ({
  text,
  type = "button",
  color = "primary",
  ...rest
}) => {
  return (
    <button type={type} className={`btn ${colorMapper[color]}`} {...rest}>
      {text}
    </button>
  );
};

/*
    color: "primary" | color: "secondary" | color: "danger"
*/
