import { useState } from "react";
import "./App.css";
import ButtonContainer from "./ButtonContainer";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [preValue, setPreValue] = useState("");
  const [currOperation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;

    if (currentValue.includes(".") && digit === ".") return;

    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }

    setOverwrite(false);
  };

  const calculate = () => {
    if (!preValue || !currOperation) return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(preValue);

    let result;

    switch (currOperation) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "x":
        result = prev * curr;
        break;
      case "/":
        if (curr !== 0) {
          result = prev / curr;
        } else {
          return "Error"; // Handle division by zero.
        }
    }
    return result;
  };

  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPreValue("");
    setOperation("");
    setOverwrite(true);
  };

  const clear = (notUsed: string) => {
    setCurrentValue("0");
    setPreValue("");
    setOperation("");
    setOverwrite(true);
  };

  const del = (notUsed: string) => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = (notUsed: string) => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const selectOperation = (operation: string) => {
    if (preValue) {
      const val = calculate();
      setCurrentValue(`${val}`);
      setPreValue(`${val}`);
    } else {
      setPreValue(currentValue);
    }
    setOperation(operation);
    setOverwrite(true);
  };

  return (
    <div className="container">
      <div id="display">{currentValue}</div>
      <ButtonContainer
        selectDigit={setDigit}
        equalsFunc={equals}
        selectOperation={selectOperation}
        clearFunc={clear}
        percentFunc={percent}
        delFunc={del}
      />
    </div>
  );
}

export default App;
