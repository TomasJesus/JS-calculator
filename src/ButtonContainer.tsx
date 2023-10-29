import "./ButtonContainer.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

type Props = {
  ButtonPress: (button: string) => void;
};

function ButtonContainer(props: Props) {
  const equalsFunc = () => {
    props.ButtonPress("=");
  };

  return (
    <div className="button-container">
      <OperationButton
        operation="C"
        name="clear"
        selectOperation={props.ButtonPress}
      />
      <OperationButton
        operation="+/-"
        name="negative"
        selectOperation={props.ButtonPress}
      />
      <OperationButton
        operation="%"
        name="percent"
        selectOperation={props.ButtonPress}
      />
      <OperationButton
        operation="/"
        name="divide"
        selectOperation={props.ButtonPress}
      />
      <DigitButton digit="7" name="seven" selectDigit={props.ButtonPress} />
      <DigitButton digit="8" name="eight" selectDigit={props.ButtonPress} />
      <DigitButton digit="9" name="nine" selectDigit={props.ButtonPress} />
      <OperationButton
        operation="*"
        name="multiply"
        selectOperation={props.ButtonPress}
      />
      <DigitButton digit="4" name="four" selectDigit={props.ButtonPress} />
      <DigitButton digit="5" name="five" selectDigit={props.ButtonPress} />
      <DigitButton digit="6" name="six" selectDigit={props.ButtonPress} />
      <OperationButton
        operation="+"
        name="add"
        selectOperation={props.ButtonPress}
      />
      <DigitButton digit="1" name="one" selectDigit={props.ButtonPress} />
      <DigitButton digit="2" name="two" selectDigit={props.ButtonPress} />
      <DigitButton digit="3" name="three" selectDigit={props.ButtonPress} />
      <OperationButton
        operation="-"
        name="subtract"
        selectOperation={props.ButtonPress}
      />
      <DigitButton digit="0" name="zero" selectDigit={props.ButtonPress} />
      <DigitButton digit="." name="decimal" selectDigit={props.ButtonPress} />
      <button id="equals" onClick={equalsFunc}>
        =
      </button>
    </div>
  );
}

export default ButtonContainer;
