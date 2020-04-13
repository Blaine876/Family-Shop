import React from "react";

import "./Button.css";

const Button = ({ buttonText, onClick, type, disabled }) => {
  return (
    <button
      className="button"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
