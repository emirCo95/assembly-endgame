/* eslint-disable react/prop-types */

import Letter from './Letter';

const Word = (props) => {
  return (
    <div className="word-container">
      {props.word.split('').map((letter, idx) => {
        return <Letter key={idx} char={letter} />;
      })}
    </div>
  );
};

export default Word;
