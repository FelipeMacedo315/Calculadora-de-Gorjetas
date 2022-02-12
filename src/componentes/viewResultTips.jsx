import React, { useEffect } from "react";
function ViewResultsTips(props) {
  useEffect(() => {}, [props.price]);
  return (
    <div className="ViewResultsTips">

      <div className="line-results">
      <h3>{props.text}</h3>
      <p>/person</p>
      </div>
      <h1>${props.price}</h1>
    </div>
  );
}
export default ViewResultsTips;
