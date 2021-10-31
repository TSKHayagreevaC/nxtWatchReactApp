import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import './index.css'

import {HiMoon, HiFire} from 'react-icons/hi'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
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
  HeaderLargeUserImage,
  HeaderLogoutButtonSmall,
  HeaderLogoutButton,
  HamburgerDisplayContainer,
  HamburgerMenuContainer,
  SidebarTopContainerList,
  SidebarTopContainerListItem,
  SidebarTopContainerListItemText,
  LogoutModalContainer,
  LogoutModalText,
  LogoutButtonsContainer,
  LogoutModalCancelButton,
  LogoutModalLogoutButton,
} from './styledComponents'

class Header extends Component {
  state = {
    displayHamburg: false,
  }

  removeJwtToken = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {
            isLightThemeActive,
            alterTheme,
            activeRoute,
            alterActiveRoute,
          } = value
          const {displayHamburg} = this.state
          const displayHamburgValue = displayHamburg ? 'block' : 'none'
          const headerBackgroundColor = isLightThemeActive
            ? '#ffffff'
            : '#181818'
          const headerLogoImage = isLightThemeActive
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          const onClickLogoImage = () => {
            alterActiveRoute('home')
          }
          const themeButtonImage = isLightThemeActive ? (
            <HiMoon size="35" />
          ) : (
            <FiSun size="35" color="#f9f9f9" />
          )
          const headerUserIconColor = isLightThemeActive ? '#181818' : '#f9f9f9'
          const headerLogoutIconColor = isLightThemeActive
            ? '#181818'
            : '#f9f9f9'

          const onClickHomeRoute = () => {
            alterActiveRoute('home')
          }
          const onClickTrendingRoute = () => {
            alterActiveRoute('trending')
          }
          const onClickGamingRoute = () => {
            alterActiveRoute('gaming')
          }
          const onClickSavedVideosRoute = () => {
            alterActiveRoute('savedVideos')
          }

          const displayHamburgMenu = () => {
            this.setState(prevState => ({
              displayHamburg: !prevState.displayHamburg,
            }))
          }

          const sidebarContainerTextColor = isLightThemeActive
            ? '#181818'
            : '#f9f9f9'

          const sidebarContainerIconsColor = isLightThemeActive
            ? '#181818'
            : '#f9f9f9'

          const popupModalBgColor = isLightThemeActive ? '#f9f9f9' : '#181818'
          const popupModalTextColor = isLightThemeActive ? '#181818' : '#f9f9f9'
          return (
            <HeaderBgContainer>
              <HeaderContainer backgroundColor={headerBackgroundColor}>
                <Link to="/" onClick={onClickLogoImage}>
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
                  <HeaderHamburgerButton onClick={displayHamburgMenu}>
                    <GiHamburgerMenu size="32" color={headerUserIconColor} />
                  </HeaderHamburgerButton>
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
              <HamburgerDisplayContainer display={displayHamburgValue}>
                <HamburgerMenuContainer backgroundColor={headerBackgroundColor}>
                  <SidebarTopContainerList>
                    <SidebarTopContainerListItem
                      onClick={onClickHomeRoute}
                      backgroundColor={
                        activeRoute === 'home' ? '#909090' : 'transparent'
                      }
                    >
                      <AiFillHome
                        size="22"
                        color={
                          activeRoute === 'home'
                            ? '#ff0000'
                            : sidebarContainerTextColor
                        }
                      />
                      <SidebarTopContainerListItemText
                        color={sidebarContainerTextColor}
                      >
                        <Link
                          to="/"
                          style={{
                            textDecoration: 'none',
                            color: `${sidebarContainerTextColor}`,
                          }}
                        >
                          Home
                        </Link>
                      </SidebarTopContainerListItemText>
                    </SidebarTopContainerListItem>
                    <SidebarTopContainerListItem
                      onClick={onClickTrendingRoute}
                      backgroundColor={
                        activeRoute === 'trending' ? '#909090' : 'transparent'
                      }
                    >
                      <HiFire
                        size="22"
                        color={
                          activeRoute === 'trending'
                            ? '#ff0000'
                            : sidebarContainerIconsColor
                        }
                      />
                      <SidebarTopContainerListItemText
                        color={sidebarContainerTextColor}
                      >
                        <Link
                          to="/trending"
                          style={{
                            textDecoration: 'none',
                            color: `${sidebarContainerTextColor}`,
                          }}
                        >
                          Trending
                        </Link>
                      </SidebarTopContainerListItemText>
                    </SidebarTopContainerListItem>
                    <SidebarTopContainerListItem
                      onClick={onClickGamingRoute}
                      backgroundColor={
                        activeRoute === 'gaming' ? '#909090' : 'transparent'
                      }
                    >
                      <SiYoutubegaming
                        size="22"
                        color={
                          activeRoute === 'gaming'
                            ? '#ff0000'
                            : sidebarContainerIconsColor
                        }
                      />
                      <SidebarTopContainerListItemText
                        color={sidebarContainerTextColor}
                      >
                        <Link
                          to="/gaming"
                          style={{
                            textDecoration: 'none',
                            color: `${sidebarContainerTextColor}`,
                          }}
                        >
                          Gaming
                        </Link>
                      </SidebarTopContainerListItemText>
                    </SidebarTopContainerListItem>
                    <SidebarTopContainerListItem
                      onClick={onClickSavedVideosRoute}
                      backgroundColor={
                        activeRoute === 'savedVideos'
                          ? '#909090'
                          : 'transparent'
                      }
                    >
                      <BiListPlus
                        color={
                          activeRoute === 'savedVideos'
                            ? '#ff0000'
                            : sidebarContainerTextColor
                        }
                        size="22"
                      />
                      <SidebarTopContainerListItemText
                        color={sidebarContainerTextColor}
                      >
                        <Link
                          to="/saved-videos"
                          style={{
                            textDecoration: 'none',
                            color: `${sidebarContainerTextColor}`,
                          }}
                        >
                          Saved videos
                        </Link>
                      </SidebarTopContainerListItemText>
                    </SidebarTopContainerListItem>
                  </SidebarTopContainerList>
                </HamburgerMenuContainer>
              </HamburgerDisplayContainer>
            </HeaderBgContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(Header)
