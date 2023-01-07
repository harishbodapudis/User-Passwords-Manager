import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import PasswordView from '../PasswordView'

import PasswordSearch from '../PasswordSearch'

class PasswordManager extends Component {
  state = {
    password: '',
    websiteName: '',
    userName: '',
    websiteData: [],
    searchPasswords: '',
    showPasswords: false,
  }

  websiteName = e => {
    const websiteNameValue = e.target.value
    this.setState({websiteName: websiteNameValue})
  }

  websiteUser = e => {
    this.setState({userName: e.target.value})
  }

  websitePassword = e => {
    const passwordValue = e.target.value
    this.setState({password: passwordValue})
  }

  showPasswords = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  userWebsiteData = e => {
    e.preventDefault()
    const {password, websiteName, userName} = this.state

    if (password && websiteName && userName) {
      const newWebsiteData = {
        id: uuidv4(),
        userName,
        websiteName,
        password,
        colorNo: Math.floor(Math.random() * 6),
      }
      this.setState(prevState => ({
        websiteData: [...prevState.websiteData, newWebsiteData],
      }))
      this.setState({password: '', websiteName: '', userName: ''})
    } else {
      this.setState({password: '', websiteName: '', userName: ''})
    }
  }

  removeUserWebsiteDetails = id => {
    const {websiteData} = this.state
    const newWebsiteData = websiteData.filter(eachItem => eachItem.id !== id)
    this.setState({websiteData: [...newWebsiteData]})
  }

  displaySearchItems = value => {
    console.log(value)
    this.setState({searchPasswords: value})
  }

  render() {
    const {
      websiteName,
      userName,
      password,
      websiteData,
      showPasswords,
      searchPasswords,
    } = this.state

    console.log(
      websiteName,
      userName,
      password,
      websiteData,
      showPasswords,
      searchPasswords,
    )
    let displayWebsitesData = null
    console.log(searchPasswords.length)

    if (searchPasswords.length) {
      displayWebsitesData = websiteData.filter(eachItem =>
        eachItem.websiteName
          .toLowerCase()
          .includes(searchPasswords.toLowerCase()),
      )
    } else {
      displayWebsitesData = websiteData
    }

    return (
      <div className="main-box">
        <div className="main-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="form-img-box">
          <div className="form-box">
            <h1 className="heading">Add New Password</h1>
            <form onSubmit={this.userWebsiteData} className="form">
              <div className="web-input-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-label-img"
                />
                <input
                  type="text"
                  name="website"
                  value={websiteName}
                  placeholder="Enter Website"
                  className="websiteField"
                  onChange={this.websiteName}
                />
              </div>
              <div className="web-input-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-label-img"
                />
                <input
                  type="text"
                  name="user"
                  value={userName}
                  placeholder="Enter Username"
                  className="websiteField"
                  onChange={this.websiteUser}
                />
              </div>
              <div className="web-input-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-label-img"
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter Password"
                  className="websiteField"
                  onChange={this.websitePassword}
                />
              </div>

              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="form-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager"
            />
          </div>
        </div>
        <div className="display-passwords-box">
          <div className="search-password-counts-box">
            <div className="password-counts-box">
              <h1 className="passwords-count">Your Passwords</h1>
              <p className="count"> {websiteData.length}</p>
            </div>
            <PasswordSearch displaySearchItems={this.displaySearchItems} />
          </div>
          <div className="show-password-box">
            <input
              type="checkbox"
              name="showPassword"
              onChange={this.showPasswords}
              id="showPassword"
            />
            <label htmlFor="showPassword"> Show Passwords</label>
          </div>

          <div className="passwords-view-box">
            <ul>
              {displayWebsitesData.length > 0 ? (
                displayWebsitesData.map(eachItem => (
                  <PasswordView
                    key={eachItem.id}
                    userWebsiteData={eachItem}
                    showPasswords={showPasswords}
                    removeUserWebsiteDetails={this.removeUserWebsiteDetails}
                  />
                ))
              ) : (
                <div className="no-passwords-img-box">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-password-img"
                  />
                  <p>No Passwords</p>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
