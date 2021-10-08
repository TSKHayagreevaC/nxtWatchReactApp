import {Component} from 'react'

import {RiCloseFill} from 'react-icons/ri'

import Header from '../Header'
import SidebarSection from '../SidebarContainer'

import {
  HomeContainer,
  HomeBarsContainer,
  MainContainer,
  BannerContainer,
  BannerContentContainer,
  BannerCloseButton,
  BannerHeading,
  BannerImage,
  BannerButton,
} from './styledComponents'

class Home extends Component {
  state = {
    isBannerActive: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const {searchInput} = this.state
    const videosListUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const response = await fetch(videosListUrl)
    console.log(response)
  }

  hideBanner = () => {
    this.setState({
      isBannerActive: false,
    })
  }

  renderBannerContainer = () => (
    <BannerContainer>
      <BannerContentContainer>
        <BannerImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
        <BannerHeading>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerHeading>
        <BannerButton>GET IT NOW</BannerButton>
      </BannerContentContainer>
      <BannerCloseButton type="button" onClick={this.hideBanner}>
        <RiCloseFill size="22" />
      </BannerCloseButton>
    </BannerContainer>
  )

  renderVideosListContainer = () => {
    const {isBannerActive} = this.state
    return (
      <MainContainer>
        {isBannerActive ? this.renderBannerContainer() : null}
        videos list
      </MainContainer>
    )
  }

  render() {
    return (
      <HomeContainer>
        <Header />
        <HomeBarsContainer>
          <SidebarSection />
          {this.renderVideosListContainer()}
        </HomeBarsContainer>
      </HomeContainer>
    )
  }
}

export default Home
