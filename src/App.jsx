import { useState, useEffect } from 'react';

import Header from './components/Header';
import Language from './components/Language';
import Status from './components/Status';
import Word from './components/Word';
import Keyboard from './components/Keyboard';

import { languages } from './utils/languages';
import NewGameButton from './components/NewGameButton';
import clsx from 'clsx';

const App = () => {
  const [currentWord, setCurrentWord] = useState('react');
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => setCurrentWord(data[0]));
  }, []);

  const handleUserGuess = (letter) => {
    setGuessedLetters((prev) => {
      return prev.includes(letter) ? prev : [...prev, letter];
    });
  };

  const languageElements = languages.map((language, idx) => {
    const isLanguageLost = idx < wrongGuessCount;
    const className = clsx('language-box', isLanguageLost && 'lost');
    return (
      <Language
        key={idx}
        className={className}
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
      <Word word={currentWord} guessedLetters={guessedLetters} />
      <Keyboard
        currentWord={currentWord}
        handleUserGuess={handleUserGuess}
        guessedLetters={guessedLetters}
      />
      <NewGameButton />
    </main>
  );
};

export default App;
