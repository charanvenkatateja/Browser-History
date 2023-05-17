import './index.css'

const HistoryItem = props => {
  const {details, onDelete} = props
  const {id, timeAccessed, domainUrl, title, logoUrl} = details

  const onClickDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="item-container">
      <div className="first">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img" />
        <p className="heading">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={onClickDeleteButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
