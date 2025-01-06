/* eslint-disable react/prop-types */
const Letter = (props) => {
  return (
    <div className="word-character-container">
      <span className="word-character">
        {props.guessedLetters.includes(props.char)
          ? props.char.toUpperCase()
          : ' '}
      </span>
    </div>
  );
};

export default Letter;
