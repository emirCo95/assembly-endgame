/* eslint-disable react/prop-types */
const Letter = (props) => {
  return (
    <div className="word-character-container">
      <span className="word-character">{props.char.toUpperCase()}</span>
    </div>
  );
};

export default Letter;
