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
          <h3>Get points by clicking on a cat but don&apos;t click on the same one more than once!</h3>
        </div>
        <div className="scoreBoard">
          <h1>Score: {score}</h1>
          <h1>High Score: {highScore}</h1>
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
