import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'
import {format, formatDistanceStrict} from 'date-fns'

import Context from '../../context/Context'

import './index.css'
import {
  VideoListItem,
  VideoListItemContainer,
  VideoListItemThumbnailContainer,
  VideoListItemThumbnailImage,
  VideoListItemContentContainer,
  VideoListItemContentProfileContainer,
  VideoListItemContentProfileImage,
  VideoListItemContentItemsContainer,
  VideoListItemContentItemsHeading,
  VideoListItemChannelName,
  VideoListItemViewsTimeContainerSmall,
  VideoListItemViewsTimeContainerLarge,
  VideoListItemContainerItemText,
} from './styledComponents'

const dateFormatDistance = dateString => {
  const formatDistanceDate = formatDistanceStrict(
    new Date(dateString),
    new Date(),
  )
  return formatDistanceDate
}

const VideoItemCard = props => (
  <Context.Consumer>
    {value => {
      const {isLightThemeActive} = value
      const {videoItem} = props
      const formattedDate = format(
        new Date(videoItem.publishedAt),
        'yyyy, MM, dd',
      )
      const publishedTimeAgo = dateFormatDistance(formattedDate)

      const headTextColor = isLightThemeActive ? '#313131' : '#f9f9f9'
      const textColor = isLightThemeActive ? '#424242' : '#7e858e'
      return (
        <VideoListItem>
          <Link className="link-style" to={`videos/${videoItem.id}`}>
            <VideoListItemContainer>
              <VideoListItemThumbnailContainer>
                <VideoListItemThumbnailImage
                  src={videoItem.thumbnailUrl}
                  alt="video thumbnail"
                />
              </VideoListItemThumbnailContainer>
              <VideoListItemContentContainer>
                <VideoListItemContentProfileContainer>
                  <VideoListItemContentProfileImage
                    src={videoItem.channel.profileImageUrl}
                    alt="channel profile image"
                  />
                </VideoListItemContentProfileContainer>
                <VideoListItemContentItemsContainer>
                  <VideoListItemContentItemsHeading color={headTextColor}>
                    {videoItem.title}
                  </VideoListItemContentItemsHeading>
                  <VideoListItemChannelName color={textColor}>
                    {videoItem.channel.name}
                  </VideoListItemChannelName>
                  <VideoListItemViewsTimeContainerLarge>
                    <VideoListItemContainerItemText
                      color={textColor}
                    >{`${videoItem.viewCount} views`}</VideoListItemContainerItemText>
                    <BsDot size="22" color={textColor} />
                    <VideoListItemContainerItemText color={textColor}>
                      {publishedTimeAgo}
                    </VideoListItemContainerItemText>
                  </VideoListItemViewsTimeContainerLarge>
                  <VideoListItemViewsTimeContainerSmall>
                    <VideoListItemContainerItemText color={textColor}>
                      {videoItem.channel.name}
                    </VideoListItemContainerItemText>
                    <BsDot size="22" color={textColor} />
                    <VideoListItemContainerItemText
                      color={textColor}
                    >{`${videoItem.viewCount} views`}</VideoListItemContainerItemText>
                    <BsDot size="22" color={textColor} />
                    <VideoListItemContainerItemText color={textColor}>
                      {publishedTimeAgo}
                    </VideoListItemContainerItemText>
                  </VideoListItemViewsTimeContainerSmall>
                </VideoListItemContentItemsContainer>
              </VideoListItemContentContainer>
            </VideoListItemContainer>
          </Link>
        </VideoListItem>
      )
    }}
  </Context.Consumer>
)

export default VideoItemCard
