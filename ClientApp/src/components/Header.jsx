import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Characters from '../pages/Characters'
import CreateCharacter from '../pages/CreateCharacter'

const Header = () => {
  return (
    <Router>
      <main className="Header">
        <header>
          <button className="Hero">
            <Link to="/Home">Home</Link>
          </button>
          <button className="Hero">
            <Link to="/Characters">Characters</Link>
          </button>
          <button className="Hero">
            <Link to="/CreateCharacter">Create</Link>
          </button>
        </header>
      </main>
      <Switch>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/Characters" component={Characters}></Route>
        <Route
          exact
          path="/CreateCharacter"
          component={CreateCharacter}
        ></Route>
      </Switch>
    </Router>
  )
}

export default Header
