import {RiCloseFill} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'

import {
  HomeContainer,
  HomeBarsContainer,
  SidebarContainer,
  SidebarTopContainer,
  SidebarTopContainerList,
  SidebarTopContainerListItem,
  SidebarTopContainerListItemText,
  SidebarBottomContainer,
  SidebarBottomHeading,
  SidebarBottomIconsContainer,
  SidebarBottomIconImage,
  SidebarBottomContainerText,
  MainContainer,
  BannerContainer,
  BannerContentContainer,
  BannerCloseButton,
  BannerHeading,
  BannerImage,
  BannerButton,
} from './styledComponents'

const Home = () => (
  <HomeContainer>
    <Header />
    <HomeBarsContainer>
      <SidebarContainer>
        <SidebarTopContainer>
          <SidebarTopContainerList>
            <SidebarTopContainerListItem>
              <AiFillHome size="22" color="#424242" />
              <SidebarTopContainerListItemText>
                Home
              </SidebarTopContainerListItemText>
            </SidebarTopContainerListItem>
            <SidebarTopContainerListItem>
              <HiFire size="22" color="#424242" />
              <SidebarTopContainerListItemText>
                Trending
              </SidebarTopContainerListItemText>
            </SidebarTopContainerListItem>
            <SidebarTopContainerListItem>
              <SiYoutubegaming size="22" color="#424242" />
              <SidebarTopContainerListItemText>
                Gaming
              </SidebarTopContainerListItemText>
            </SidebarTopContainerListItem>
            <SidebarTopContainerListItem>
              <BiListPlus size="22" color="#424242" />
              <SidebarTopContainerListItemText>
                Save videos
              </SidebarTopContainerListItemText>
            </SidebarTopContainerListItem>
          </SidebarTopContainerList>
        </SidebarTopContainer>
        <SidebarBottomContainer>
          <SidebarBottomHeading>CONTACT US</SidebarBottomHeading>
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
          <SidebarBottomContainerText>
            Enjoy! Now to see your channels and recommendations!
          </SidebarBottomContainerText>
        </SidebarBottomContainer>
      </SidebarContainer>
      <MainContainer>
        <BannerContainer>
          <BannerContentContainer>
            <BannerImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
            <BannerHeading>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerHeading>
            <BannerButton>GET IT NOW</BannerButton>
          </BannerContentContainer>
          <BannerCloseButton>
            <RiCloseFill size="22" />
          </BannerCloseButton>
        </BannerContainer>
      </MainContainer>
    </HomeBarsContainer>
  </HomeContainer>
)

export default Home
