import React, { useState } from 'react';

export default function Dictoniaries() {
  const [word, setWord] = useState();
  const [data, setData] = useState(null);

  const fetchMeaning = async () => {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const result = await res.json();
    setData(result);
  };

  // Check if data has been fetched
  if (data) {
    return (
      <div className='text-white container py-3'>
        {data.map((meaning) => (
          <div key={meaning.word}>
            <h3>{meaning.word}</h3>
            {meaning.phonetics.map((phonetic) => (
              <div key={phonetic.text}>
                <p>{phonetic.text}</p>
                {phonetic.audio && <audio src={phonetic.audio} controls />}
              </div>
            ))}
            {meaning.meanings.map((mean, index) => (
              <div key={index}>
                <h4>{mean.partOfSpeech}</h4>
                {mean.definitions.map((definition, idx) => (
                  <div key={idx}>
                    <p>{definition.definition}</p>
                    {definition.example && <p>Example: {definition.example}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='container justify-content-center py-3'>
      <input type="text" class="form-control" placeholder="Word" aria-label="Word" aria-describedby="addon-wrapping" value={word} onChange={(e) => setWord(e.target.value)} />
      <button class="btn btn-primary my-1" onClick={fetchMeaning}>Fetch Meaning</button>
    </div>
  );
}
