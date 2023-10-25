import "./ButtonContainer.css";

type Props = {
  operation: string;
  name: string;
  selectOperation: (operation: string) => void;
};

function OperationButton(props: Props) {
  const selectOperation = () => {
    props.selectOperation(props.operation);
  };

  return (
    <button id={props.name} className="op-button" onClick={selectOperation}>
      {props.operation}
    </button>
  );
}

export default OperationButton;
