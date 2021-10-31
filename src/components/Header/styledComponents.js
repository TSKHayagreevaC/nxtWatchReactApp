import styled from 'styled-components'

export const HeaderBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeaderContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.backgroundColor};
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

export const HeaderHamburgerButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
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
    border: 2px solid #909090;
    border-radius: 4px;
    color: #909090;
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
  }
`

export const HamburgerDisplayContainer = styled.div`
  display: ${props => props.display};
  align-self: flex-end;
`

export const HamburgerMenuContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  align-self: flex-end;
  background-color: ${props => props.backgroundColor};
  margin: 0px 10px 10px 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const SidebarTopContainerList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 5px;
  margin: 5px 0px 5px 0px;
`

export const SidebarTopContainerListItem = styled.li`
  list-style-type: none;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 5px 5px 15px;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`
export const SidebarTopContainerListItemText = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  margin: 5px 0px 5px 15px;
  font-weight: 600;
  color: ${props => props.color};
`

export const LogoutModalContainer = styled.div`
  width: 80%;
  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const LogoutModalText = styled.p`
  margin: 5px 0px 5px 0px;
  font-size: 18px;
  color: ${props => props.color};
  font-family: 'Roboto';
  text-align: center;
  font-weight: bold;
`

export const LogoutButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
`

export const LogoutModalCancelButton = styled.button`
  border: 2px solid #606060;
  color: #606060;
  background-color: transparent;
  border-radius: 4px;
  padding: 4px;
  font-weight: bold;
  font-size: 18px;
  height: 40px;
  width: 100px;
  margin: 10px;
  cursor: pointer;
`

export const LogoutModalLogoutButton = styled.button`
  border: none;
  outline: none;
  background: #3b82f6;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  height: 40px;
  width: 100px;
  margin: 10px;
  cursor: pointer;
`
