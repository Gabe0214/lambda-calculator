import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers"
const Display = props => {
  return <div className ="display">{/* Display any props data here */}
  {props.value}
  </div>;
};
export default Display