import React from "react";
import "./style.css";

/**
 * Template Button Component
 * @param {IButtonProps} props
 * @see {@link IButtonProps} for more information
 */
const Button = ({ ...props }: IButtonProps) => {
  return (
    <div className={`button-container ${props.id}-container`}>
      <button className={`button ${props.id}-button`} onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
};

export { Button };
