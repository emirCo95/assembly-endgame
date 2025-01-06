/* eslint-disable react/prop-types */
import { useState } from 'react';

import Key from './Key';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const Keyboard = (props) => {
  const [keyStates, setKeyStates] = useState(
    alphabet.split('').reduce((acc, letter) => {
      acc[letter] = 'yellow'; // Initial state for each key
      return acc;
    }, {})
  );
  const wordArray = props.word.split('');

  const charClicked = (char) => {
    const isCorrect = wordArray.includes(char);
    setKeyStates((prevKeyStates) => ({
      ...prevKeyStates,
      [char]: isCorrect ? 'green' : 'red',
    }));

    const occurencesOfLetter = findAllIndex(wordArray, char);
    console.log(occurencesOfLetter);
  };

  function findAllIndex(arr, value) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        indices.push(i);
      }
    }
    return indices;
  }

  const keyboardElements = alphabet.split('').map((letter, idx) => {
    return (
      <Key
        key={idx}
        char={letter}
        charClicked={() => charClicked(letter)}
        className={keyStates[letter]}
      />
    );
  });

  return <section className="keyboard-container">{keyboardElements}</section>;
};

export default Keyboard;
