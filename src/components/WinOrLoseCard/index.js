import './index.css'

const WinOrLossCard = props => {
  const {gameResult, score, onPlayingAgain} = props
  const result = gameResult === 'Win' ? 'Won' : 'Lose'
  const scoreResult = gameResult === 'Win' ? 'Best Score' : 'Score'
  const imgUrl =
    gameResult === 'Win'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const playingAgain = () => {
    onPlayingAgain()
  }

  return (
    <div className="result-container">
      <div className="score-card">
        <h1 className="result-heading">You {result}</h1>
        <p className="score">{scoreResult}</p>
        <p className="score-value">{score}/12</p>
        <button type="button" className="play-btn" onClick={playingAgain}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="win-loss-img" />
    </div>
  )
}

export default WinOrLossCard
