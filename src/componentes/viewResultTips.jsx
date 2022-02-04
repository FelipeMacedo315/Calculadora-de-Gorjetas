import React from "react";
function ViewResultsTips(props) {
  return (
    <div className=" ViewResultsTips">
      {props.text} <br /> /person <h1>{props.price}</h1>
    </div>
  );
}
export default ViewResultsTips;
