import Header from './components/Header';
import Language from './components/Language';
import Status from './components/Status';

import { languages } from './utils/languages';

const languageElements = languages.map((language, idx) => {
  <Language
    key={idx}
    name={language.name}
    backgroundColor={language.backgroundColor}
    color={language.color}
  />;
});

const App = () => {
  return (
    <main>
      <Header />
      <Status />
      {languageElements}
    </main>
  );
};

export default App;
