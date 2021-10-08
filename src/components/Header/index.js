import {HiMoon} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import {
  HeaderContainer,
  HeaderLinksContainer,
  HeaderLogo,
  HeaderThemeButton,
  HeaderUserImageContainer,
  HeaderLargeUserImage,
  HeaderLogoutButtonSmall,
  HeaderLogoutButton,
} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <HeaderLogo
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="logo image"
    />
    <HeaderLinksContainer>
      <HeaderThemeButton>
        <HiMoon size="35" />
      </HeaderThemeButton>
      <HeaderUserImageContainer>
        <GiHamburgerMenu size="32" />
      </HeaderUserImageContainer>
      <HeaderLargeUserImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        alt="profile"
      />
      <HeaderLogoutButtonSmall>
        <FiLogOut size="30" />
      </HeaderLogoutButtonSmall>
      <HeaderLogoutButton>Logout</HeaderLogoutButton>
    </HeaderLinksContainer>
  </HeaderContainer>
)

export default Header
