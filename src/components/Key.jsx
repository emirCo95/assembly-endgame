/* eslint-disable react/prop-types */
const Key = (props) => {
  return (
    <button
      onClick={() => console.log(props.char)}
      className="keyboard-character"
    >
      {props.char.toUpperCase()}
    </button>
  );
};

export default Key;
