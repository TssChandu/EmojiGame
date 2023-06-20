import './index.css'

const Navbar = props => {
  const {score, topScore, gameResult} = props
  let resultContainer
  if (gameResult === 'Win' || gameResult === 'Loss') {
    resultContainer = null
  } else {
    resultContainer = (
      <div className="scoreContainer">
        <p className="score-para">Score: {score}</p>
        <p className="score-para">Top Score: {topScore}</p>
      </div>
    )
  }

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          className="nav-logo"
          alt="emoji logo"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>
      {resultContainer}
    </nav>
  )
}

export default Navbar
