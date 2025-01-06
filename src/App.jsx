import { useState, useEffect } from 'react';

import Header from './components/Header';
import Language from './components/Language';
import Status from './components/Status';
import Word from './components/Word';
import Keyboard from './components/Keyboard';

import { languages } from './utils/languages';
import NewGameButton from './components/NewGameButton';

const App = () => {
  const [currentWord, setCurrentWord] = useState('react');

  // useEffect(() => {
  //   fetch('https://random-word-api.herokuapp.com/word')
  //     .then((res) => res.json())
  //     .then((data) => setCurrentWord(data[0]));
  // }, []);

  const languageElements = languages.map((language, idx) => {
    return (
      <Language
        key={idx}
        name={language.name}
        backgroundColor={language.backgroundColor}
        color={language.color}
      />
    );
  });

  return (
    <main>
      <Header />
      <Status />
      <section className="language-container">{languageElements}</section>
      <Word word={currentWord} />
      <Keyboard />
      <NewGameButton />
    </main>
  );
};

export default App;
