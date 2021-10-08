import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const HomeBarsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f1f5f9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: ${props => props.display};
`

export const BannerContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const BannerCloseButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`

export const BannerImage = styled.img`
  width: 100px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 30px;
  }
`

export const BannerHeading = styled.h1`
  margin: 10px 0px 10px 0px;
  font-size: 22px;
  font-weight: 600;
  color: #424242;
`

export const BannerPara = styled.p`
  margin: 3px 0px 3px 0px;
  font-size: 16px;
  color: #424242;
`

export const BannerButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid #424242;
  color: #424242;
  font-weight: bold;
  background-color: transparent;
`
