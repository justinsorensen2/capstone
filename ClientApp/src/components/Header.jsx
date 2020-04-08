import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Account from '../pages/Account'
import CreateCharacter from '../pages/CreateCharacter'

const Header = () => {
  return (
    <Router>
      <main className="Header">
        <header>
          <Link to="/Home">
            <button className="Header-Button">Home</button>
          </Link>
          <Link to="/CreateCharacter">
            <button className="Header-Button">Create</button>
          </Link>
          <Link to="/Account">
            <button className="Header-Button">Account</button>
          </Link>
        </header>
      </main>
      <Switch>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/Account:userId" component={Account}></Route>
        <Route exact path="/CreateCharacter" page={CreateCharacter}></Route>
      </Switch>
    </Router>
  )
}

export default Header
