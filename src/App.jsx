import { useState, useEffect } from 'react'
import CardDeck from './components/CardDeck';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const incrementScore = () => {
		setScore(score + 1);
  }

  const resetScore = () => {
    setScore(0);
  }
  
  useEffect(() => {
    if (score > highScore) {
        setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <>
      <header>
        <div className="headerLeft">
          <h1 className="gameTitle">Memory Remains</h1>
          <h3>Get points by clicking on a cat but don&apos;t click on any more than once!</h3>
        </div>
        <div className="scoreBoard">
          <h2>Score: {score}</h2>
          <h2>High Score: {highScore}</h2>
        </div>
      </header>
      <main>
        <CardDeck
          incrementScore={incrementScore}
          resetScore={resetScore}
       />
        
      </main>
    </>
  )
}

export default App
