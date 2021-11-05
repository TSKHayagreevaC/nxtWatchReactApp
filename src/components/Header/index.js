import {Component} from 'react'
import {NavLink, Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import './index.css'

import {HiMoon, HiFire} from 'react-icons/hi'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import Context from '../../context/Context'
import {
  HeaderBgContainer,
  HeaderContainer,
  HeaderLinksContainer,
  HeaderLogo,
  HeaderThemeButton,
  HeaderHamburgerButton,
  HamburgerModalContainer,
  HamburgerModalCloseButton,
  HamburgerModalLinksContainer,
  HamburgerModalLinksText,
  HeaderLargeUserImage,
  HeaderLogoutButtonSmall,
  HeaderLogoutButton,
  LogoutModalContainer,
  LogoutModalText,
  LogoutButtonsContainer,
  LogoutModalCancelButton,
  LogoutModalLogoutButton,
} from './styledComponents'

class Header extends Component {
  removeJwtToken = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isLightThemeActive, alterTheme} = value
          const headerBackgroundColor = isLightThemeActive
            ? '#ffffff'
            : '#181818'
          const headerLogoImage = isLightThemeActive
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          const themeButtonImage = isLightThemeActive ? (
            <HiMoon size="35" />
          ) : (
            <FiSun size="35" color="#f9f9f9" />
          )
          const headerUserIconColor = isLightThemeActive ? '#181818' : '#f9f9f9'
          const headerLogoutIconColor = isLightThemeActive
            ? '#181818'
            : '#f9f9f9'

          const displayHamburgMenu = () => {
            this.setState(prevState => ({
              displayHamburg: !prevState.displayHamburg,
            }))
          }

          const sidebarContainerTextColor = isLightThemeActive
            ? '#181818'
            : '#f9f9f9'

          const popupModalBgColor = isLightThemeActive ? '#f9f9f9' : '#181818'
          const popupModalTextColor = isLightThemeActive ? '#181818' : '#f9f9f9'
          return (
            <HeaderBgContainer>
              <HeaderContainer backgroundColor={headerBackgroundColor}>
                <Link to="/">
                  <HeaderLogo src={headerLogoImage} alt="website logo" />
                </Link>
                <HeaderLinksContainer>
                  <HeaderThemeButton
                    type="button"
                    onClick={alterTheme}
                    data-testid="theme"
                  >
                    {themeButtonImage}
                  </HeaderThemeButton>
                  <Popup
                    className="ham-popup-content"
                    trigger=<HeaderHamburgerButton onClick={displayHamburgMenu}>
                      <GiHamburgerMenu size="32" color={headerUserIconColor} />
                    </HeaderHamburgerButton>
                    modal
                  >
                    {close => (
                      <HamburgerModalContainer
                        backgroundColor={headerBackgroundColor}
                      >
                        <HamburgerModalCloseButton
                          type="button"
                          onClick={close}
                        >
                          <AiOutlineClose
                            size="22px"
                            color={headerUserIconColor}
                          />
                        </HamburgerModalCloseButton>
                        <HamburgerModalLinksContainer>
                          <NavLink
                            exact
                            to="/"
                            className="nav-link-style"
                            style={{
                              textDecoration: 'none',
                              color: `${sidebarContainerTextColor}`,
                              width: '100%',
                            }}
                            activeStyle={{
                              backgroundColor: '#909090',
                              color: '#ff0000',
                            }}
                          >
                            <AiFillHome size="22" />
                            <HamburgerModalLinksText
                              color={sidebarContainerTextColor}
                            >
                              Home
                            </HamburgerModalLinksText>
                          </NavLink>
                          <NavLink
                            exact
                            to="/trending"
                            className="nav-link-style"
                            style={{
                              textDecoration: 'none',
                              color: `${sidebarContainerTextColor}`,
                              width: '100%',
                            }}
                            activeStyle={{
                              backgroundColor: '#909090',
                              color: '#ff0000',
                            }}
                          >
                            <HiFire size="22" />
                            <HamburgerModalLinksText
                              color={sidebarContainerTextColor}
                            >
                              Trending
                            </HamburgerModalLinksText>
                          </NavLink>
                          <NavLink
                            exact
                            to="/gaming"
                            className="nav-link-style"
                            style={{
                              textDecoration: 'none',
                              color: `${sidebarContainerTextColor}`,
                              width: '100%',
                            }}
                            activeStyle={{
                              backgroundColor: '#909090',
                              color: '#ff0000',
                            }}
                          >
                            <SiYoutubegaming size="22" />
                            <HamburgerModalLinksText
                              color={sidebarContainerTextColor}
                            >
                              Gaming
                            </HamburgerModalLinksText>
                          </NavLink>
                          <NavLink
                            exact
                            to="/saved-videos"
                            className="nav-link-style"
                            style={{
                              textDecoration: 'none',
                              color: `${sidebarContainerTextColor}`,
                              width: '100%',
                            }}
                            activeStyle={{
                              backgroundColor: '#909090',
                              color: '#ff0000',
                            }}
                          >
                            <BiListPlus size="22" />
                            <HamburgerModalLinksText
                              color={sidebarContainerTextColor}
                            >
                              Saved videos
                            </HamburgerModalLinksText>
                          </NavLink>
                        </HamburgerModalLinksContainer>
                      </HamburgerModalContainer>
                    )}
                  </Popup>
                  <HeaderLargeUserImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <Popup
                    trigger=<HeaderLogoutButtonSmall type="button">
                      <FiLogOut size="30" color={headerLogoutIconColor} />
                    </HeaderLogoutButtonSmall>
                    modal
                    className="popup-content"
                  >
                    {close => (
                      <LogoutModalContainer backgroundColor={popupModalBgColor}>
                        <LogoutModalText color={popupModalTextColor}>
                          Are you sure, you want to logout
                        </LogoutModalText>
                        <LogoutButtonsContainer>
                          <LogoutModalCancelButton
                            type="button"
                            onClick={close}
                          >
                            Cancel
                          </LogoutModalCancelButton>
                          <LogoutModalLogoutButton
                            type="button"
                            onClick={this.removeJwtToken}
                          >
                            Confirm
                          </LogoutModalLogoutButton>
                        </LogoutButtonsContainer>
                      </LogoutModalContainer>
                    )}
                  </Popup>
                  <Popup
                    trigger=<HeaderLogoutButton type="button">
                      Logout
                    </HeaderLogoutButton>
                    modal
                    className="popup-content"
                  >
                    {close => (
                      <LogoutModalContainer backgroundColor={popupModalBgColor}>
                        <LogoutModalText color={popupModalTextColor}>
                          Are you sure, you want to logout?
                        </LogoutModalText>
                        <LogoutButtonsContainer>
                          <LogoutModalCancelButton
                            type="button"
                            onClick={close}
                          >
                            Cancel
                          </LogoutModalCancelButton>
                          <LogoutModalLogoutButton
                            type="button"
                            onClick={this.removeJwtToken}
                          >
                            Confirm
                          </LogoutModalLogoutButton>
                        </LogoutButtonsContainer>
                      </LogoutModalContainer>
                    )}
                  </Popup>
                </HeaderLinksContainer>
              </HeaderContainer>
            </HeaderBgContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(Header)
