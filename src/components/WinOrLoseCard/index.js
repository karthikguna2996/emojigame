const WinOrLooseCard = props => {
  const {resultInfo, playAgain} = props
  const {compareList, scoreCount, temp, bestScore, eList} = resultInfo
  console.log(bestScore)

  const reset = () => {
    playAgain()
  }

  let winrloose
  if (scoreCount === 12 && temp === false) {
    winrloose = (
      <div>
        <h1>You Won</h1>
        <p>Best Score</p>

        <p>{scoreCount}/12</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  } else {
    winrloose = (
      <div>
        <h1>you Lose</h1>
        <p>Score</p>
        <p>{scoreCount}/12</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  }

  return (
    <div>
      {winrloose}
      <button type="button" onClick={reset}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLooseCard
