import { useState, useEffect } from "react"

import Header from "./components/Header"
import Figure from "./components/Figure"
import WrongLetters from "./components/WrongLetters"
import Word from "./components/Word"
import Popup from "./components/Popup"
import Notification from "./components/Notification"

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key, keyCode } = e
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase()
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(prevState => [...prevState, letter])
          } else {
            setShowNotification(true)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(prevState => [...prevState, letter])
          } else {
            setShowNotification(true)
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [correctLetters, wrongLetters, playable])

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      {showNotification && <Notification showNotification={showNotification} setShowNotification={setShowNotification} />}
      <Popup wrongLetters={wrongLetters} correctLetters={correctLetters} setPlayable={setPlayable} selectedWord={selectedWord} />
    </>
  )
}

export default App
