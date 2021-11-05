import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import AuthenticatedRoute from './components/AuthenticatedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import Context from './context/Context'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isLightThemeActive: true,
    savedVideosList: [],
  }

  alterTheme = () => {
    this.setState(prevItem => ({
      isLightThemeActive: !prevItem.isLightThemeActive,
    }))
  }

  saveOrDeleteVideo = newVideoItem => {
    const {savedVideosList} = this.state
    const isVideoSaved = savedVideosList.find(
      eachItem => eachItem.id === newVideoItem.id,
    )
    if (isVideoSaved) {
      const filteredList = savedVideosList.filter(
        eachItem => eachItem.id !== newVideoItem.id,
      )
      this.setState({savedVideosList: filteredList})
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, newVideoItem],
      }))
    }
  }

  render() {
    const {isLightThemeActive, savedVideosList, isVideoSaved} = this.state
    return (
      <Context.Provider
        value={{
          isLightThemeActive,
          alterTheme: this.alterTheme,
          savedVideosList,
          isVideoSaved,
          saveOrDeleteVideo: this.saveOrDeleteVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <AuthenticatedRoute exact path="/" component={Home} />
          <AuthenticatedRoute exact path="/trending" component={Trending} />
          <AuthenticatedRoute exact path="/gaming" component={Gaming} />
          <AuthenticatedRoute
            exact
            path="/saved-videos"
            component={SavedVideos}
          />
          <AuthenticatedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
