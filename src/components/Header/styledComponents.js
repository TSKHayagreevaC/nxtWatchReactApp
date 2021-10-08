import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0px 20px 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 0px 40px 0px 40px;
  }
`

export const HeaderLogo = styled.img`
  height: 24px;
  width: 100px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 160px;
  }
`

export const HeaderLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const HeaderThemeButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const HeaderUserImageContainer = styled.div`
  width: 30px;
  height: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HeaderLargeUserImage = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`

export const HeaderLogoutImage = styled.img`
  display: block;
  width: 30px;
  height: 14px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeaderLogoutButtonSmall = styled.button`
  display: block;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeaderLogoutButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    background-color: transparent;
    border: 2px solid #3b82f6;
    border-radius: 4px;
    color: #3b82f6;
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
  }
`
