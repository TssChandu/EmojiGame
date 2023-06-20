import {Component} from 'react'

import Navbar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, gameResult: '', idList: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickingEmoji = id => {
    const {idList, score, topScore} = this.state
    if (idList.includes(id) === true) {
      this.setState({
        gameResult: 'Loss',
      })
    } else {
      const newScore = score + 1
      if (newScore === 12) {
        this.setState({
          gameResult: 'Win',
        })
      }
      if (topScore < newScore) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          topScore: newScore,
          idList: [...prevState.idList, id],
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          idList: [...prevState.idList, id],
        }))
      }
    }
  }

  onPlayingAgain = () => {
    this.setState({
      score: 0,
      gameResult: '',
      idList: [],
    })
  }

  render() {
    const {score, topScore, gameResult} = this.state
    const emojiList = this.shuffledEmojisList()
    console.log(gameResult)
    const gameOver = gameResult !== 'Win' && gameResult !== 'Loss'
    return (
      <div className="bg-container">
        <Navbar score={score} topScore={topScore} gameResult={gameResult} />
        {gameOver && (
          <ul className="emoji-card-container">
            {emojiList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiObj={eachEmoji}
                onClickingEmoji={this.onClickingEmoji}
              />
            ))}
          </ul>
        )}
        {(gameResult === 'Win' || gameResult === 'Loss') && (
          <div className="game-result-container">
            <WinOrLossCard
              gameResult={gameResult}
              score={score}
              onPlayingAgain={this.onPlayingAgain}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
