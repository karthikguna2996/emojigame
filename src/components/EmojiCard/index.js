import './index.css'

const EmojiCard = props => {
  const {emojiItem, increaseScore} = props
  const {id, emojiUrl, emojiName} = emojiItem
  const clickChange = () => {
    increaseScore(id)
  }
  return (
    <li>
      <button type="button" onClick={clickChange}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
