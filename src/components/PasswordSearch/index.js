import './index.css'

const PasswordSearch = props => {
  const {displaySearchItems} = props
  const searchItem = e => {
    displaySearchItems(e.target.value)
  }

  return (
    <div className="search-box">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
        alt="search"
        className="search-label"
      />
      <input
        type="search"
        placeholder="Search"
        className="search-input-field"
        onChange={searchItem}
      />
    </div>
  )
}

export default PasswordSearch
