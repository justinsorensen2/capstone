import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'
import CreateCharacter from './pages/CreateCharacter'
import Landing from './pages/Landing'
import CreateAccount from './pages/CreateAccount'
import './custom.scss'

const App = () => {
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/Home/:id" component={Home}></Route>
          <Route exact path="/Characters" component={Characters}></Route>
          <Route
            exact
            path="/CreateCharacter"
            component={CreateCharacter}
          ></Route>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/CreateAccount" component={CreateAccount}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
