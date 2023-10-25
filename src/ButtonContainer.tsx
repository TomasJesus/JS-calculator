import "./ButtonContainer.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

type Props = {
  selectOperation: (operation: string) => void;
  selectDigit: (digit: string) => void;
  equalsFunc: () => void;
};

function ButtonContainer(props: Props) {
  return (
    <div className="button-container">
      <OperationButton
        operation="AC"
        name="clear"
        selectOperation={props.selectOperation}
      />
      <OperationButton
        operation="C"
        name="delete"
        selectOperation={props.selectOperation}
      />
      <OperationButton
        operation="%"
        name="percent"
        selectOperation={props.selectOperation}
      />
      <OperationButton
        operation="/"
        name="divide"
        selectOperation={props.selectOperation}
      />
      <DigitButton digit="7" name="seven" selectDigit={props.selectDigit} />
      <DigitButton digit="8" name="eight" selectDigit={props.selectDigit} />
      <DigitButton digit="9" name="nine" selectDigit={props.selectDigit} />
      <OperationButton
        operation="x"
        name="multiply"
        selectOperation={props.selectOperation}
      />
      <DigitButton digit="4" name="four" selectDigit={props.selectDigit} />
      <DigitButton digit="5" name="five" selectDigit={props.selectDigit} />
      <DigitButton digit="6" name="six" selectDigit={props.selectDigit} />
      <OperationButton
        operation="+"
        name="add"
        selectOperation={props.selectOperation}
      />
      <DigitButton digit="1" name="one" selectDigit={props.selectDigit} />
      <DigitButton digit="2" name="two" selectDigit={props.selectDigit} />
      <DigitButton digit="3" name="three" selectDigit={props.selectDigit} />
      <OperationButton
        operation="-"
        name="subtract"
        selectOperation={props.selectOperation}
      />
      <DigitButton digit="0" name="zero" selectDigit={props.selectDigit} />
      <DigitButton digit="." name="decimal" selectDigit={props.selectDigit} />
      <button id="equals" onClick={props.equalsFunc}>
        =
      </button>
    </div>
  );
}

export default ButtonContainer;
