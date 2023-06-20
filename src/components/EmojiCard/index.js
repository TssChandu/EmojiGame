import './index.css'

const EmojiCard = props => {
  const {emojiObj, onClickingEmoji} = props
  const {id, emojiUrl, emojiName} = emojiObj
  const clickingEmoji = () => {
    onClickingEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-btn" type="button">
        <img
          className="emoji-img"
          alt={emojiName}
          src={emojiUrl}
          onClick={clickingEmoji}
        />
      </button>
    </li>
  )
}

export default EmojiCard
