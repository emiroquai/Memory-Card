/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import '../styles/CardDeck.css';
import Card from './Card';

export default function CardDeck() {
  const [catUrls, setCatUrls] = useState([]);
  const apiKey = "mZZWYUXt6JImAnzXnL8WrBoayZqOH26u";
  
  async function fetchCatGifs(apiKey, count = 8) {
    const baseUrl = "http://api.giphy.com/v1/gifs/";
    const endpoint = "random";
    const tag = "cat";

    const urls = [];
    for (let i = 0; i < count; i++) {
      const url = `${baseUrl}${endpoint}?api_key=${apiKey}&tag=${tag}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const gifUrl = data.data.images.original.url;
        urls.push(gifUrl);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    }
    setCatUrls(urls);
  }

  useEffect(() => {
    fetchCatGifs(apiKey);
  }, []); 

  return (
    <div className="card-deck">
      {catUrls.map((url, index) => (
        <Card key={index} image={url} />
      ))}
    </div>
  );
}