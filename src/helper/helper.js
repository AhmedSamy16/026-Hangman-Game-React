export function checkWin(wrong, correct, word) {
    let status = 'win'
    // check for win
    word.split('').forEach(letter => {
        if (!correct.includes(letter)) {
            status = ''
        }
    })
    // check for lose
    if (wrong.length === 6) {
        status = 'lose'
    }
    return status
}