import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginForm,
  LoginFormLogo,
  LoginFormLabel,
  CheckboxLabel,
  LoginFormInput,
  LoginFormCheckboxInput,
  CheckboxContainer,
  FormSubmitButton,
  ErrorTextPara,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    displayErrorMsg: false,
    displayPassword: false,
  }

  getUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  getPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSuccessfulLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onLoginFailure = errorMessage => {
    this.setState({displayErrorMsg: true, errorMessage})
  }

  attemptLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const loginOptions = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, loginOptions)
    const responseData = await response.json()
    if (response.ok) {
      this.onSuccessfulLogin(responseData.jwt_token)
    } else {
      this.onLoginFailure(responseData.error_msg)
    }
  }

  showPassword = event => {
    this.setState({displayPassword: event.target.checked})
  }

  render() {
    const {errorMessage, displayErrorMsg, displayPassword} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginForm onSubmit={this.attemptLogin}>
          <LoginFormLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <LoginFormLabel htmlFor="username">USERNAME</LoginFormLabel>
          <LoginFormInput
            id="username"
            placeholder="Username"
            type="text"
            onChange={this.getUsername}
          />
          <LoginFormLabel htmlFor="password">PASSWORD</LoginFormLabel>
          <LoginFormInput
            id="password"
            placeholder="Password"
            type={displayPassword ? 'text' : 'password'}
            onChange={this.getPassword}
          />
          <CheckboxContainer>
            <LoginFormCheckboxInput
              id="showPassword"
              type="checkbox"
              onChange={this.showPassword}
            />
            <CheckboxLabel htmlFor="showPassword">Show Password</CheckboxLabel>
          </CheckboxContainer>
          <FormSubmitButton>Login</FormSubmitButton>
          {displayErrorMsg && <ErrorTextPara>*{errorMessage}</ErrorTextPara>}
        </LoginForm>
      </LoginContainer>
    )
  }
}

export default Login
