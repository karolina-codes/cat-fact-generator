import React, { useEffect, useState } from 'react';

import './App.css';
import { getImage } from './services/imageApi';

function App() {
  const [image, setImage] = useState('');
  const [facts, setFacts] = useState<string[]>([]);
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetchFacts();
  }, []);

  useEffect(() => {
    handleNewSet();
  }, []);

  const fetchFacts = () => {
    fetch('/facts')
      .then((response) => response.json())
      .then((newFacts) => {
        setFacts(newFacts);
        setFact(facts[0]);
      });
  };

  const handleNewImage = async () => {
    const newImage = await getImage();
    setImage(newImage);
  };

  const handleNewFact = () => {
    const newFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(newFact);
  };

  const handleNewSet = () => {
    handleNewImage();
    handleNewFact();
  };

  return (
    <div className="app">
      <h1>Generate a cat fact!</h1>
      <section id="imgAndFact">
        <img id="catImg" src={image} alt="cat" />
        <p id="factText">{fact}</p>
      </section>
      <button onClick={handleNewSet}>Generate!</button>
      <p id="factSource">
        Facts sourced from{' '}
        <a href="https://www.mygavet.com/services/blog/50-cat-facts-you-probably-didnt-know">
          mygavet
        </a>
        .
      </p>
    </div>
  );
}

export default App;
