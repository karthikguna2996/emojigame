import './index.css'

const NavBar = props => {
  const {scoreCount, topScoreCount, temp} = props
  let topScore
  if (scoreCount === 0) {
    topScore = (
      <>
        <p>Score: {scoreCount}</p>
        <p>Top Score: {topScoreCount}</p>
      </>
    )
  } else if ((scoreCount === 12 && temp === false) || temp === true) {
    topScore = null
  } else {
    topScore = (
      <>
        <p>Top Score: {0}</p>
        <p>Score: {scoreCount}</p>
      </>
    )
  }
  return (
    <nav className="navabr">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="navitem">{topScore}</div>
    </nav>
  )
}

export default NavBar
