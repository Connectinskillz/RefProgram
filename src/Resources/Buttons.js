import React from "react";
import "./button.css";

const Button = ({
  name,
  ondisplay,
  id,  
  classed,
}) => {
  return (
    <button onClick={ondisplay} id={id} className={classed}>
      {name}
    </button>
  );
};

export default Button;
