import React, { useEffect } from "react";
function ViewResultsTips(props) {
  useEffect(() => {
   
  },[props.price]);
  return (
    <div className=" ViewResultsTips">
      <h3>
        {props.text} <p>/person</p>
      </h3>
      <h1>{props.price}</h1>
    </div>
  );
}
export default ViewResultsTips;
