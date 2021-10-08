import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 80%;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 5px #cccccc;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const LoginFormLogo = styled.img`
  width: 100px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const LoginFormLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  color: #475569;
  margin: 12px 0px 3px 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin: 22px 0px 3px 0px;
  }
`

export const CheckboxLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  color: #475569;
  margin: 3px 0px 3px 0px;
`

export const LoginFormInput = styled.input`
  width: 100%;
  border: 1px solid #475569;
  border-radius: 8px;
  padding: 3px;
  @media screen and (min-width: 768px) {
    padding: 12px;
    font-size: 18px;
  }
`
export const LoginFormCheckboxInput = styled.input`
  margin-right: 5px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const FormSubmitButton = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  background-color: #3b82f6;
  border-radius: 8px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 5px;
    height: 40px;
  }
`