/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import '../styles/CardDeck.css';
import Card from './Card';

export default function CardDeck({ incrementScore, resetScore }) {
  const [catGifs, setCatGifs] = useState([]);
  const [reset, setReset] = useState(false);
  const apiKey = "mZZWYUXt6JImAnzXnL8WrBoayZqOH26u";
  
  async function fetchCatGifs(apiKey, count = 10) {
    const baseUrl = "https://api.giphy.com/v1/gifs/";
    const endpoint = "random";
    const tag = "cat";

    const cats = [];
    for (let i = 0; i < count; i++) {
      const url = `${baseUrl}${endpoint}?api_key=${apiKey}&tag=${tag}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        const gifUrl = data.data.images.original.url;
        cats.push({gifUrl: gifUrl, isClicked: false});
      } catch (error) {
        console.error("Error occurred:", error);
      }
    }
    setCatGifs(cats);

  }

  const shuffleArray = array => {
    const shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    } 
    return shuffledArray; 
  };

  const playTurn = (cat) => {
    if (!cat.isClicked) {
      incrementScore();
      cat.isClicked = true;
      let shuffledCats = shuffleArray(catGifs);
      setCatGifs(shuffledCats);
    } else {
      resetScore();
      setReset(!reset);
    }
  }

  useEffect(() => {
    fetchCatGifs(apiKey);
  }, [reset]); 

  return (
    <div className="cardDeck">
      {catGifs.map((cat, index) => (
        <Card 
          key={index} 
          image={cat.gifUrl} 
          handleClick={() => playTurn(cat)}
        />
      ))}
    </div>
  );
}