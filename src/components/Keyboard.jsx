/* eslint-disable react/prop-types */
import Key from './Key';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const Keyboard = () => {
  const keyboardElements = alphabet.split('').map((letter, idx) => {
    return <Key key={idx} char={letter} />;
  });

  return <section className="keyboard-container">{keyboardElements}</section>;
};

export default Keyboard;
