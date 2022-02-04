import React, { useState } from "react";
function BtnsPorcentage(props) {
  const [btnActive, setBtnActive] = useState(true);
  const [classBtn, setClassBtn] = useState("btn-inactive");

  return (
    <button
      onClick={() => {
        setBtnActive(!btnActive);
        if (btnActive === true) {
          setClassBtn("btn-active");
        } else {
          setClassBtn("btn-inactive");
        }
      }}
      className={classBtn}
    >
      {props.optionsPorcentage}%
    </button>
  );
}
export default BtnsPorcentage;
