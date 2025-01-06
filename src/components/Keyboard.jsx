/* eslint-disable react/prop-types */
import { clsx } from 'clsx';

import Key from './Key';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const Keyboard = (props) => {
  const keyboardElements = alphabet.split('').map((letter, idx) => {
    const isGuessed = props.guessedLetters.includes(letter);
    const isCorrect = isGuessed && props.currentWord.includes(letter);
    const isWrong = isGuessed && !props.currentWord.includes(letter);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <Key
        key={idx}
        char={letter}
        handleUserGuess={() => props.handleUserGuess(letter)}
        className={className}
      />
    );
  });

  return <section className="keyboard-container">{keyboardElements}</section>;
};

export default Keyboard;
