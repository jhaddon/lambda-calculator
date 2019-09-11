import React from "react";

const SpecialButton = props => {
  console.log(props);
  return (
      <button className="spcButton">{props.specials}</button>
  );
};

export default SpecialButton;