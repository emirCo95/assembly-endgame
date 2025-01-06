/* eslint-disable react/prop-types */
const Key = (props) => {
  return (
    <button className={`keyboard-character`} onClick={props.handleUserGuess}>
      {props.char.toUpperCase()}
    </button>
  );
};

export default Key;
