/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'

import WinOrLooseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    scoreCount: 0,
    topScoreCount: 0,
    eList: [
      {
        id: 0,
        emojiName: 'Face with stuck out tongue',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
      },
      {
        id: 1,
        emojiName: 'Face with head bandage',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
      },
      {
        id: 2,
        emojiName: 'Face with hugs',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
      },
      {
        id: 3,
        emojiName: 'Face with laughing',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
      },
      {
        id: 4,
        emojiName: 'Laughing face with hand in front of mouth',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
      },
      {
        id: 5,
        emojiName: 'Face with mask',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
      },
      {
        id: 6,
        emojiName: 'Face with silence',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
      },
      {
        id: 7,
        emojiName: 'Face with stuck out tongue and winked eye',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
      },
      {
        id: 8,
        emojiName: 'Grinning face with sweat',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
      },
      {
        id: 9,
        emojiName: 'Smiling face with heart eyes',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
      },
      {
        id: 10,
        emojiName: 'Grinning face',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
      },
      {
        id: 11,
        emojiName: 'Smiling face with star eyes',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
      },
    ],
    compareList: [],

    temp: false,
    bestScore: 0,
  }

  increaseScore = id => {
    const {eList, compareList, scoreCount} = this.state
    eList.sort(() => Math.random() - 0.5)
    const e2List = [...eList]
    const bool = compareList.some(eachItem => eachItem.id === id)
    const newList = eList.filter(eachItem => eachItem.id === id)
    let bestMark
    if (bool === false && scoreCount === 11) {
      this.setState(prevState => ({
        compareList: bool ? [...compareList] : [...compareList, ...newList],
        eList: e2List,
        scoreCount: bool ? prevState.scoreCount : prevState.scoreCount + 1,

        temp: bool,
        bestScore:
          prevState.bestScore <= prevState.scoreCount
            ? prevState.scoreCount + 1
            : prevState.bestScore,
      }))
    } else {
      this.setState(prevState => ({
        compareList: bool ? [...compareList] : [...compareList, ...newList],
        eList: e2List,
        scoreCount: bool ? prevState.scoreCount : prevState.scoreCount + 1,

        temp: bool,
        bestScore:
          prevState.bestScore < prevState.scoreCount
            ? prevState.scoreCount
            : prevState.bestScore,
      }))
    }
  }

  playAgain = () => {
    const {emojisList} = this.props
    this.setState({
      temp: false,
      scoreCount: 0,
      compareList: [],
      eList: [...emojisList],
    })
  }

  render() {
    const {scoreCount, bestScore, eList, compareList, temp} = this.state
    let a
    if (temp === true) {
      a = <WinOrLooseCard resultInfo={this.state} playAgain={this.playAgain} />
    } else if (temp === false && scoreCount === 12) {
      a = <WinOrLooseCard resultInfo={this.state} playAgain={this.playAgain} />
    } else {
      a = eList.map(eachItem => (
        <EmojiCard
          emojiItem={eachItem}
          increaseScore={this.increaseScore}
          key={eachItem.id}
        />
      ))
    }

    return (
      <div>
        <NavBar scoreCount={scoreCount} topScoreCount={bestScore} temp={temp} />

        <ul>{a}</ul>
      </div>
    )
  }
}

export default EmojiGame
