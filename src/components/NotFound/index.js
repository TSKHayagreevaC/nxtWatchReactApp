import Header from '../Header'
import SidebarSection from '../SidebarContainer'

import {
  NotFoundBgContainer,
  NotFoundContentContainer,
  NotFoundMainContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <NotFoundBgContainer>
    <Header />
    <NotFoundContentContainer>
      <SidebarSection />
      <NotFoundMainContainer>
        <NotFoundImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png" />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundPara>
          We are sorry, the page you requested could not be found
        </NotFoundPara>
      </NotFoundMainContainer>
    </NotFoundContentContainer>
  </NotFoundBgContainer>
)

export default NotFound
