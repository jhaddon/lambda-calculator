import React from "react";

const NumberButton = props => {
  console.log(props);
  return (
      <button className="numButton">
      {props.numbers}
      </button>
  );
};

export default NumberButton;