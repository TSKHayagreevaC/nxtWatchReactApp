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
} from './styledComponents'

const Login = () => (
  <LoginContainer>
    <LoginForm>
      <LoginFormLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
      <LoginFormLabel htmlFor="username">USERNAME</LoginFormLabel>
      <LoginFormInput id="username" placeholder="Username" type="text" />
      <LoginFormLabel htmlFor="password">PASSWORD</LoginFormLabel>
      <LoginFormInput id="password" placeholder="Password" type="password" />
      <CheckboxContainer>
        <LoginFormCheckboxInput id="showPassword" type="checkbox" />
        <CheckboxLabel htmlFor="showPassword">Show Password</CheckboxLabel>
      </CheckboxContainer>
      <FormSubmitButton>Login</FormSubmitButton>
    </LoginForm>
  </LoginContainer>
)

export default Login
