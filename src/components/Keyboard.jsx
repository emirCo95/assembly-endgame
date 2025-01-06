/* eslint-disable react/prop-types */
import Key from './Key';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const Keyboard = (props) => {
  const keyboardElements = alphabet.split('').map((letter, idx) => {
    return (
      <Key
        key={idx}
        char={letter}
        handleUserGuess={() => props.handleUserGuess(letter)}
      />
    );
  });

  return <section className="keyboard-container">{keyboardElements}</section>;
};

export default Keyboard;
