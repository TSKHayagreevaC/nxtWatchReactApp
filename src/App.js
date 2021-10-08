import {Switch, Route, Redirect} from 'react-router-dom'

import AuthenticatedRoute from './components/AuthenticatedRoute'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <AuthenticatedRoute exact path="/" component={Home} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
