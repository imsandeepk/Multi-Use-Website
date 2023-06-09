import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";

export default function Data() {
  const [email, setEmail] = useState('');
  const [randomMeme, setRandomMeme] = useState(null);
  
  const [meme, setmeme] = useState("")
  
  const fetchmeme = async () => {
    const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    const data = await res.json();
    setmeme(data.text)
    setRandomMeme("");
  }
  
  
  const fetchData = async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    const memes = data.data.memes;
    const shuffledMemes = shuffleArray(memes);
    const randomMeme = shuffledMemes[0]; // Get the first meme (you can change this as per your requirements)
    setRandomMeme(randomMeme);
    setmeme("")
  };
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    
    <div className="input-group mb-3 container py-3 ">
      <button type="button" className="btn btn-primary mx-1 rounded" onClick={fetchData}>
        Fetch Meme Template
      </button>
      
      <button type="button" className="btn btn-primary mx-1 rounded" onClick={fetchmeme}>
        Fetch Random Facts
      </button>
      <button type="button" className="btn btn-primary mx-1 rounded  " >
      
        <a className="text-white link-underline link-underline-opacity-0" href="https://www.file.io/">
        Upload and Share files
        </a>
      </button>
      <Link to="/QR">
      <button type="button" className="btn btn-primary mx-1 rounded" onClick={fetchmeme}>
        Create QR code
      </button></Link>
      <Link to="/dict">
      <button type="button" className="btn btn-primary mx-1 rounded" onClick={fetchmeme}>
        Dictionary
      </button>
      </Link>
      
      
      { randomMeme &&
        <div className="container img-fluid">
          <h2 className="text-white">{randomMeme.name}</h2>
          <img src={randomMeme.url} alt={randomMeme.name} />
        </div>
}
      <div className="container">
      <h4 className="text-white">{meme}</h4>
      </div>

    </div>
  
  );
}
