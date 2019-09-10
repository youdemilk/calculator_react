import React from "react";

import "./button.css";

const Button = ({ props, item }) => {
  const { label, btnStyle, funcBtn } = props;
  return (
    <button
      type="button"
      className={btnStyle}
      onClick={() => funcBtn(item)}
    >
      {label}
    </button>
  );
};

export default Button;
