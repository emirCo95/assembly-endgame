/* eslint-disable react/prop-types */
const Key = (props) => {
  return (
    <button
      onClick={() => props.charClicked()}
      className={`keyboard-character ${props.className}`}
    >
      {props.char.toUpperCase()}
    </button>
  );
};

export default Key;
