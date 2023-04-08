import { useEffect } from "react"
import { checkWin } from "../helper/helper"

const Popup = ({ selectedWord, wrongLetters, correctLetters, setPlayable }) => {
    let finalMsg = ''
    let finalParagraph = ''
    let playable = true
    if (checkWin(wrongLetters, correctLetters, selectedWord) === 'win') {
        finalMsg = 'Congratulations. You Won!'
        playable = false
    } else if (checkWin(wrongLetters, correctLetters, selectedWord) === 'lose') {
        finalMsg = 'Unfortunately. You Lost!'
        finalParagraph = `... The Word was ${selectedWord}`
        playable = false
    }
    useEffect(() => {
        setPlayable(playable)
    })
    return (
        <div className={`popup-container ${finalMsg && 'show-popup'}`}>
            <div className="popup">
                <h2>{finalMsg}</h2>
                <h3>{finalParagraph}</h3>
                <button onClick={() => location.reload()}>Play Again</button>
            </div>
        </div>
    )
}

export default Popup