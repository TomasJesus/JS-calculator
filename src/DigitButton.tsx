type Props = {
  digit: string;
  name: string;
  selectDigit: (digit: string) => void;
};

function DigitButton(props: Props) {
  const selecDigit = () => {
    props.selectDigit(props.digit);
  };

  return (
    <button id={props.name} className="digit-button" onClick={selecDigit}>
      {props.digit}
    </button>
  );
}

export default DigitButton;
