import {Component} from 'react'
import {NavLink} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import Context from '../../context/Context'

import './index.css'
import {
  SidebarContainer,
  SidebarTopContainer,
  SidebarTopContainerListItemText,
  SidebarBottomContainer,
  SidebarBottomHeading,
  SidebarBottomIconsContainer,
  SidebarBottomIconImage,
  SidebarBottomContainerText,
} from './styledComponents'

class SideBarSection extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isLightThemeActive} = value
          const sidebarContainerBackgroundColor = isLightThemeActive
            ? '#ffffff'
            : '#181818'

          const sidebarContainerTextColor = isLightThemeActive
            ? '#181818'
            : '#f9f9f9'

          return (
            <SidebarContainer backgroundColor={sidebarContainerBackgroundColor}>
              <SidebarTopContainer>
                <NavLink
                  exact
                  to="/"
                  className="nav-link-style"
                  style={{
                    textDecoration: 'none',
                    color: `${sidebarContainerTextColor}`,
                    width: '100%',
                  }}
                  activeStyle={{backgroundColor: '#909090', color: '#ff0000'}}
                >
                  <AiFillHome size="22" />
                  <SidebarTopContainerListItemText
                    color={sidebarContainerTextColor}
                  >
                    Home
                  </SidebarTopContainerListItemText>
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
                  activeStyle={{backgroundColor: '#909090', color: '#ff0000'}}
                >
                  <HiFire size="22" />
                  <SidebarTopContainerListItemText
                    color={sidebarContainerTextColor}
                  >
                    Trending
                  </SidebarTopContainerListItemText>
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
                  activeStyle={{backgroundColor: '#909090', color: '#ff0000'}}
                >
                  <SiYoutubegaming size="22" />
                  <SidebarTopContainerListItemText
                    color={sidebarContainerTextColor}
                  >
                    Gaming
                  </SidebarTopContainerListItemText>
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
                  activeStyle={{backgroundColor: '#909090', color: '#ff0000'}}
                >
                  <BiListPlus size="22" />
                  <SidebarTopContainerListItemText
                    color={sidebarContainerTextColor}
                  >
                    Saved videos
                  </SidebarTopContainerListItemText>
                </NavLink>
              </SidebarTopContainer>
              <SidebarBottomContainer>
                <SidebarBottomHeading color={sidebarContainerTextColor}>
                  CONTACT US
                </SidebarBottomHeading>
                <SidebarBottomIconsContainer>
                  <SidebarBottomIconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SidebarBottomIconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SidebarBottomIconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SidebarBottomIconsContainer>
                <SidebarBottomContainerText color={sidebarContainerTextColor}>
                  Enjoy! Now to see your channels and recommendations!
                </SidebarBottomContainerText>
              </SidebarBottomContainer>
            </SidebarContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SideBarSection
