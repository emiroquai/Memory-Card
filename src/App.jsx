import { useState, useEffect } from 'react'
import './App.css'
import CardDeck from './components/CardDeck';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const incrementScore = () => {
		setScore(score + 1);
  }
  
  useEffect(() => {
    if (score > highScore) {
        setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <>
      <header>
        <h1>Memory Game</h1>
        <div className="scoreBoard">
          <h3>Score: {score}</h3>
          <h3>High Score: {highScore}</h3>
        </div>
      </header>
      <main>
        <CardDeck
          incrementScore={incrementScore}
       />
        
      </main>
    </>
  )
}

export default App
