/* eslint-disable react/prop-types */
const Key = (props) => {
  return (
    <button
      className={`keyboard-character ${props.className}`}
      onClick={props.handleUserGuess}
    >
      {props.char.toUpperCase()}
    </button>
  );
};

export default Key;
