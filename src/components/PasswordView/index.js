import './index.css'

const PasswordView = props => {
  const {userWebsiteData, showPasswords, removeUserWebsiteDetails} = props
  const {id, websiteName, userName, password, colorNo} = userWebsiteData
  const removeWebsiteDetails = () => {
    removeUserWebsiteDetails(id)
  }
  const colors = [
    '#f59e0b',
    '#10b981',
    '#f97316',
    '#b91c1c',
    '#14b8a6',
    '#0ea5e9',
    '#64748b',
  ]
  const initial = websiteName.slice(0, 1)
  const displayPassword = showPasswords ? (
    password
  ) : (
    <img
      src="
      https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      className="stars-img"
      alt="stars"
    />
  )
  console.log(displayPassword)
  return (
    <li className="user-web-details">
      <p className="initial" style={{backgroundColor: `${colors[colorNo]}`}}>
        {initial.toUpperCase()}
      </p>

      <div className="web-user-name-password">
        <p>{websiteName}</p>
        <p> {userName}</p>
        <div>
          {showPasswords ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="stars-img"
              alt="stars"
            />
          )}
        </div>
      </div>
      <button
        type="button"
        className="remove-web-data"
        onClick={removeWebsiteDetails}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-btn-img"
        />
      </button>
    </li>
  )
}

export default PasswordView
