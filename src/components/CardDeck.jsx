/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import '../styles/CardDeck.css';
import Card from './Card';

export default function CardDeck({ incrementScore }) {
  const [catGifs, setCatGifs] = useState([]);
  const apiKey = "mZZWYUXt6JImAnzXnL8WrBoayZqOH26u";
  
  async function fetchCatGifs(apiKey, count = 9) {
    const baseUrl = "http://api.giphy.com/v1/gifs/";
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

  useEffect(() => {
    fetchCatGifs(apiKey);
  }, []); 

  return (
    <div className="cardDeck">
      {catGifs.map((cat, index) => (
        <Card 
          key={index} 
          image={cat.gifUrl} 
          handleClick={incrementScore}
        />
      ))}
    </div>
  );
}