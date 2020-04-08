import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import CharacterDetails from './pages/CharacterDetails'
import CreateCharacter from './pages/CreateCharacter'
import Landing from './pages/Landing'
import CreateAccount from './pages/CreateAccount'
import Account from './pages/Account'
import './custom.scss'

const App = () => {
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/Home/:email" component={Home}></Route>
          <Route
            exact
            path="/CharacterDetails/:characterid"
            component={CharacterDetails}
          ></Route>
          <Route
            exact
            path="/CreateCharacter"
            component={CreateCharacter}
          ></Route>
          <Route exact path="/CreateAccount" component={CreateAccount}></Route>
          <Route exact path="/Account/:userId" component={Account}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
