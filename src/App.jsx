import { useState } from 'react';

import Header from './components/Header';
import Language from './components/Language';
import Status from './components/Status';

import { languages } from './utils/languages';

const App = () => {
  const [currentWord, setCurrentWord] = useState('react');

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
    </main>
  );
};

export default App;
