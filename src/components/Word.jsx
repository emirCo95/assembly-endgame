/* eslint-disable react/prop-types */

import Letter from './Letter';

const Word = (props) => {
  console.log(props.word);
  return (
    <section className="word-container">
      {props.word.split('').map((letter, idx) => {
        return <Letter key={idx} char={letter} />;
      })}
    </section>
  );
};

export default Word;
