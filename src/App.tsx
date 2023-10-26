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
    if (!preValue || !currOperation) return parseFloat(currentValue);

    const curr = parseFloat(currentValue);
    const prev = parseFloat(preValue);

    switch (currOperation) {
      case "+":
        setOperation("");
        return prev + curr;
      case "-":
        setOperation("");
        return prev - curr;
      case "x":
        setOperation("");
        return prev * curr;
      case "/":
        setOperation("");
        return prev / curr;
      default:
        setOperation("");
        return curr;
    }
  };

  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPreValue("");
    setOperation("");
    setOverwrite(true);
  };

  const clear = (notUsed: string) => {
    console.log("ignore " + notUsed);
    setCurrentValue("0");
    setPreValue("");
    setOperation("");
    setOverwrite(true);
  };

  const del = (notUsed: string) => {
    console.log("ignore " + notUsed);
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = (notUsed: string) => {
    console.log("ignore " + notUsed);
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const selectOperation = (newOperation: string) => {
    if (preValue) {
      const val = calculate();
      setCurrentValue(`${val}`);
      setPreValue(`${val}`);
    } else {
      setPreValue(currentValue);
    }
    setOperation(newOperation);
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
