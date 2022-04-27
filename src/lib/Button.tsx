import * as React from "react";
import "./Button.sass";

interface IButton {
  text: string;
  size?: "sm" | "md" | "lg";
  IconLeft?: JSX.Element;
  IconRight?: JSX.Element;
  variant?: "primary" | "ghost";
  onClick: () => void;
}

const Button: React.FC<IButton> = ({
  text,
  size = "sm",
  variant = "primary",
  IconLeft,
  IconRight,
  onClick,
}) => {
  return (
    <button
      className={`btn-cardo-${variant} btn-cardo-${size}`}
      onClick={onClick}
    >
      {IconLeft && <div className="icon-left"> {IconLeft}</div>}
      <h3>{text}</h3>
      {IconRight && <div className="icon-right"> {IconRight}</div>}
    </button>
  );
};
export default Button;
