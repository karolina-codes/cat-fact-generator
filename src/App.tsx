import React, { useEffect, useState } from 'react';

import './App.css';
import { getImage } from './services/imageApi';
import { getFacts } from './services/factScraper';

function App() {
  const [image, setImage] = useState('');
  const [facts, setFacts] = useState<string[]>([]);
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetchFacts();
  }, []);

  useEffect(() => {
    handleNewImage();
  }, []);

  const fetchFacts = async () => {
    const newFacts = await getFacts();
    setFacts(newFacts);
    setFact(facts[0]);
  };

  const handleNewImage = async () => {
    const newImage = await getImage();
    setImage(newImage);
  };

  const handleNewSet = () => {
    handleNewImage();

    const newFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(newFact);
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
