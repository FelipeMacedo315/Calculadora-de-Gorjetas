import React, { useContext, useEffect, useState } from "react";

import MeuContexto from "./contexto";
function BtnsPorcentage(props) {
  const {
    btnStatus,
    setBtnStatus,
    valueOfEat,
    porcentageSelected,
    setPorcentageSelected,
    porcentageCustom,
    setPorcentageCustom,
  } = useContext(MeuContexto);

  useEffect(() => {
    setPorcentageSelected(porcentageCustom);
  }, [porcentageCustom]);

  return (
    <React.Fragment>
      <button
        disabled={btnStatus.disableBtn1}
        onClick={() => {
          btnStatus.disableBtn1 = true;
          btnStatus.disableBtn2 = false;
          btnStatus.disableBtn3 = false;
          btnStatus.disableBtn4 = false;
          btnStatus.disableBtn5 = false;
          setPorcentageSelected(props.optionsPorcentage[0]);
          btnStatus.botão1 = "btn-active";
          btnStatus.botão2 = "btn-inactive";
          btnStatus.botão3 = "btn-inactive";
          btnStatus.botão4 = "btn-inactive";
          btnStatus.botão5 = "btn-inactive";
          btnStatus.botão6 = "btn-inactive";
        }}
        className={btnStatus.botão1}
      >
        {props.optionsPorcentage[0]}%
      </button>

      <button
        disabled={btnStatus.disableBtn2}
        onClick={() => {
          setPorcentageSelected(props.optionsPorcentage[1]);
          btnStatus.disableBtn1 = false;
          btnStatus.disableBtn2 = true;
          btnStatus.disableBtn3 = false;
          btnStatus.disableBtn4 = false;
          btnStatus.disableBtn5 = false;

          btnStatus.botão1 = "btn-inactive";
          btnStatus.botão2 = "btn-active";
          btnStatus.botão3 = "btn-inactive";
          btnStatus.botão4 = "btn-inactive";
          btnStatus.botão5 = "btn-inactive";
          btnStatus.botão6 = "btn-inactive";
        }}
        className={btnStatus.botão2}
      >
        {props.optionsPorcentage[1]}%
      </button>

      <button
        disabled={btnStatus.disableBtn3}
        onClick={() => {
          setPorcentageSelected(props.optionsPorcentage[2]);
          btnStatus.disableBtn1 = false;
          btnStatus.disableBtn2 = false;
          btnStatus.disableBtn3 = true;
          btnStatus.disableBtn4 = false;
          btnStatus.disableBtn5 = false;

          btnStatus.botão1 = "btn-inactive";
          btnStatus.botão2 = "btn-inactive";
          btnStatus.botão3 = "btn-active";
          btnStatus.botão4 = "btn-inactive";
          btnStatus.botão5 = "btn-inactive";
          btnStatus.botão6 = "btn-inactive";
        }}
        className={btnStatus.botão3}
      >
        {props.optionsPorcentage[2]}%
      </button>

      <button
        disabled={btnStatus.disableBtn4}
        onClick={() => {
          setPorcentageSelected(props.optionsPorcentage[3]);
          btnStatus.disableBtn1 = false;
          btnStatus.disableBtn2 = false;
          btnStatus.disableBtn3 = false;
          btnStatus.disableBtn4 = true;
          btnStatus.disableBtn5 = false;

          btnStatus.botão1 = "btn-inactive";
          btnStatus.botão2 = "btn-inactive";
          btnStatus.botão3 = "btn-inactive";
          btnStatus.botão4 = "btn-active";
          btnStatus.botão5 = "btn-inactive";
          btnStatus.botão6 = "btn-inactive";
        }}
        className={btnStatus.botão4}
      >
        {props.optionsPorcentage[3]}%
      </button>

      <button
        disabled={btnStatus.disableBtn5}
        onClick={() => {
          setPorcentageSelected(props.optionsPorcentage[4]);
          btnStatus.disableBtn1 = false;
          btnStatus.disableBtn2 = false;
          btnStatus.disableBtn3 = false;
          btnStatus.disableBtn4 = false;
          btnStatus.disableBtn5 = true;

          btnStatus.botão1 = "btn-inactive";
          btnStatus.botão2 = "btn-inactive";
          btnStatus.botão3 = "btn-inactive";
          btnStatus.botão4 = "btn-inactive";
          btnStatus.botão5 = "btn-active";
          btnStatus.botão6 = "btn-inactive";
        }}
        className={btnStatus.botão5}
      >
        {props.optionsPorcentage[4]}%
      </button>

      <input
        type={"text"}
        onClick={() => {
          setPorcentageSelected(porcentageCustom);
          btnStatus.disableBtn1 = false;
          btnStatus.disableBtn2 = false;
          btnStatus.disableBtn3 = false;
          btnStatus.disableBtn4 = false;
          btnStatus.disableBtn5 = false;

          btnStatus.botão1 = "btn-inactive";
          btnStatus.botão2 = "btn-inactive";
          btnStatus.botão3 = "btn-inactive";
          btnStatus.botão4 = "btn-inactive";
          btnStatus.botão5 = "btn-inactive";
          btnStatus.botão6 = "btn-active";
        }}
        onChange={(e) => {
          if (isNaN(porcentageCustom + e.target.value)) {
            setPorcentageCustom("");
          } else {
            setPorcentageCustom(e.target.value);
          }

          btnStatus.disableBtn1 = false;
          btnStatus.disableBtn2 = false;
          btnStatus.disableBtn3 = false;
          btnStatus.disableBtn4 = false;
          btnStatus.disableBtn5 = false;

          btnStatus.botão1 = "btn-inactive";
          btnStatus.botão2 = "btn-inactive";
          btnStatus.botão3 = "btn-inactive";
          btnStatus.botão4 = "btn-inactive";
          btnStatus.botão5 = "btn-inactive";
          btnStatus.botão6 = "btn-active";
        }}
        value={porcentageCustom}
        className={btnStatus.botão6}
      />
    </React.Fragment>
  );
}
export default BtnsPorcentage;
