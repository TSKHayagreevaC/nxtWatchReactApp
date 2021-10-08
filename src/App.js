import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
