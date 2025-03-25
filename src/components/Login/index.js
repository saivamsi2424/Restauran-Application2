import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    userName: '',
    password: '',
    showError: false,
    errorMessage: '',
  }

  changeUsername = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  changePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  renderUserNameField = () => {
    const {userName} = this.state
    return (
      <div>
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          onChange={this.changeUsername}
          placeholder="Username"
          id="username"
          value={userName}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          onChange={this.changePassword}
          placeholder="Password"
          id="password"
          value={password}
        />
      </div>
    )
  }

  onSubmitSucces = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showError: true, errorMessage})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)

    if (response.ok === true) {
      this.onSubmitSucces(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errorMessage, showError} = this.state
    return (
      <div className="login-form-container">
        <form className="form" onSubmit={this.onFormSubmit}>
          {this.renderUserNameField()}
          {this.renderPasswordField()}
          <button type="submit" className="submit-button">
            Login
          </button>
          {showError && <p>{errorMessage}</p>}
        </form>
      </div>
    )
  }
}

export default Login
