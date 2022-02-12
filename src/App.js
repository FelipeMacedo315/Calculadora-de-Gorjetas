import { useState, useEffect } from "react";
import "./App.css";
import BtnsPorcentage from "./componentes/btnsPorcentage";
import Label from "./componentes/label";
import ViewResultsTips from "./componentes/viewResultTips";
import MeuContexto from "./componentes/contexto";

function App() {
  const [porcentageBtns, setPorcentageBtn] = useState([5, 10, 15, 25, 50]);
  const [valueOfEat, setValueOfEat] = useState(0);
  const [numberOfPeoples, setNumberOfPeoples] = useState(0);
  const [porcentageSelected, setPorcentageSelected] = useState(0);
  const [tipAmount, setTipAmount] = useState((0).toFixed(2));
  const [tipForPeople, setTipForPeople] = useState((0).toFixed(2));
  const [porcentageCustom, setPorcentageCustom] = useState("Custom");
  const [btnStatus, setBtnstatus] = useState({
    botão1: "btn-inactive",
    disableBtn1: false,
    botão2: "btn-inactive",
    disableBtn2: false,
    botão3: "btn-inactive",
    disableBtn3: false,
    botão4: "btn-inactive",
    disableBtn4: false,
    botão5: "btn-inactive",
    disableBtn5: false,
    botão6: "btn-inactive",
    disableBtn6: false,
  }); 
   if (isNaN(tipAmount)) {
     setTipAmount(0)
   } 
   
  useEffect(() => {
    if (valueOfEat > 0 && numberOfPeoples >= 1) {

        setTipAmount(((valueOfEat * porcentageSelected) / 100).toFixed(2));
      setTipForPeople((tipAmount / numberOfPeoples).toFixed(2));
      }
    
    })
  return (
    <div className="App">
      <MeuContexto.Provider
        value={{
          valueOfEat,
          porcentageSelected,
          setPorcentageSelected,
          btnStatus,
          setBtnstatus,
          porcentageCustom,
          setPorcentageCustom,
        }}
      >
        <div className="choice-tips">
          <Label
            name="Bill"
            input={
              <input
                id="BillTotal"
                onChange={(e) => {
                  setValueOfEat(e.target.value);
                }}
                type={"number"}
                value={valueOfEat}
                min='0'
              />
            }
          />
          <fieldset>
            <legend>Select tip %</legend>
            <div className="btns-group">
              <BtnsPorcentage optionsPorcentage={porcentageBtns} />
            </div>
          </fieldset>
          <Label
            name="Number of people"
            input={
              <input
                onChange={(f) => {
                  setNumberOfPeoples(f.target.value);
                }}
                type={"number"}
                min='0'
                value={numberOfPeoples}
                id="NumberOfPeople"
              />
            }
          />
        </div>
        <div className="View-Results">
          <ViewResultsTips text="Tip Amount" price={tipForPeople} />
          <ViewResultsTips text="Total" price={tipAmount} />

          <button id="btn-reset"
            onClick={() => {
              setTipAmount((0).toFixed(2));
              setTipForPeople((0).toFixed(2));
              setNumberOfPeoples(0);
              setValueOfEat(0);
              setPorcentageCustom("Custom");
              btnStatus.botão1 = "btn-inactive";
              btnStatus.botão2 = "btn-inactive";
              btnStatus.botão2 = "btn-inactive";
              btnStatus.botão3 = "btn-inactive";
              btnStatus.botão4 = "btn-inactive";
              btnStatus.botão5 = "btn-inactive";
              btnStatus.botão6 = "btn-inactive";
            }}
          >
            Reset
          </button>
        </div>
      </MeuContexto.Provider>
    </div>
  );
}

export default App;
