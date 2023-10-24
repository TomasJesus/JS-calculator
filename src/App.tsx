import { useState } from "react";
import "./App.css";
import ButtonContainer from "./ButtonContainer";

function App() {
  const [currentValue, setCurrentValue] = useState("0");

  return (
    <div className="container">
      <div id="display">{currentValue}</div>
      <ButtonContainer />
    </div>
  );
}

export default App;
