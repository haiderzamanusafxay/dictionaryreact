import React from 'react';

const Card = ({ wordObj, playAudio }) => {
  return (
    <section className="card">
      <section className="word-audio-container">
        <section className="word-container">
          <h4 className="word">{wordObj.word}</h4>
          <p className="part-of-speech">{wordObj.meanings[0].partOfSpeech}</p>
        </section>
        {wordObj.phonetics.reduce((result, phonetic) => {
          if (phonetic.audio && phonetic.text && !result) {
            result = (
              <button
                className="play-audio"
                data-soundtrack={phonetic.audio}
                onClick={() => playAudio(phonetic.audio)}
              >
                <i className="fa-solid fa-volume-high"></i>
              </button>
            );
          }
          return result;
        }, '')}
      </section>

      <section className="phonetic-container">
        {wordObj.phonetics.map((phonetic, index) =>
          phonetic.audio && phonetic.text ? (
            <button
              key={index}
              data-soundtrack={phonetic.audio}
              className="phonetic"
              onClick={() => playAudio(phonetic.audio)}
            >
              {phonetic.text} <i className="fa-solid fa-volume-high"></i>
            </button>
          ) : null
        )}
      </section>

      <section className="definition-container">
        <ol>
          {wordObj.meanings[0].definitions.map((definitionObj, index) => (
            <li key={index}>
              <p className="definition">{definitionObj.definition}</p>
              {definitionObj.example && (
                <p className="example">{definitionObj.example}</p>
              )}
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
};

export default Card;

