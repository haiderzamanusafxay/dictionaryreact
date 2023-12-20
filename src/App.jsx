import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Loader from './components/Loader';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [audio, setAudio] = useState(new Audio());

  const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  const fetchDefinitions = async () => {
    if (!query) return;

    setLoading(true);

    try {
      const response = await fetch(`${api}${query}`);
      if (response.status > 400) throw Error(response.status);

      const words = await response.json();
      setResults(words);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setQuery('');
    }
  };

  const playAudio = (url) => {
    audio.src = url;
    audio.play();
  };

  useEffect(() => {
    return () => {
      // Cleanup audio on component unmount
      audio.pause();
    };
  }, [audio]);

  return (
    <div className="App">
      <header className="flex-column">
        <h1 className="title">English Dictionary</h1>
        <p className="description">written in JavaScript, consumes dictionaryapi.dev API</p>
      </header>

      <section className="input-container flex-row">
        <input
          type="text"
          name="query"
          placeholder="Search Dictionary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          title="Search Dictionary"
          autoFocus
        />
        <button onClick={fetchDefinitions} title="Search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </section>

      <section className="result-container flex-column">
        {loading ? (
          <Loader />
        ) : (
          results.map((wordObj) => (
            <Card key={wordObj.word} wordObj={wordObj} playAudio={playAudio} />
          ))
        )}
      </section>

      <audio id="audio"></audio>

      <section className="source-code flex-row">
        <a href="http://github.com/thuhtoosan/dictionary-app" target="_blank" rel="noopener noreferrer" className="flex-row" title="Source Code">
          <i className="fa-brands fa-github-alt"></i>
        </a>
      </section>
    </div>
  );
};

export default App;
