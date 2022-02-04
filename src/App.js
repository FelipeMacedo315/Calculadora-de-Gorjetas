import { useState } from "react";
import "./App.css";
import BtnsPorcentage from "./componentes/btnsPorcentage";
import Label from "./componentes/label";
import ViewResults from "./componentes/viewResults";
import ViewResultsTips from "./componentes/viewResultTips";

function App() {
  const [porcentageBtns, setPorcentageBtn] = useState([
    5,
    10,
    15,
    25,
    50,
    "custom",
  ]);
  return (
    <div className="App">
      <div className="choice-tips">
        <Label name="Bill" />
        <fieldset>
          <legend>Select tip %</legend>
          <div className="btns-group">
            <BtnsPorcentage optionsPorcentage={porcentageBtns[0]} />
            <BtnsPorcentage optionsPorcentage={porcentageBtns[1]} />
            <BtnsPorcentage optionsPorcentage={porcentageBtns[2]} />
            <BtnsPorcentage optionsPorcentage={porcentageBtns[3]} />
            <BtnsPorcentage optionsPorcentage={porcentageBtns[4]} />
            <BtnsPorcentage optionsPorcentage={porcentageBtns[5]} />
          </div>
        </fieldset>
        <Label name="Number of people" />
      </div>
      <ViewResults>
        <ViewResultsTips text="Tip Amount" price='10.00'/>
      </ViewResults>
    </div>
  );
}

export default App;
