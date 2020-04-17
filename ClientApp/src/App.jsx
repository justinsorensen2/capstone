import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import CharacterDetails from './pages/CharacterDetails'
import CreateCharacter from './pages/CreateCharacter'
import CreateStat from './pages/CreateStat'
import CreateSkill from './pages/CreateSkill'
import Landing from './pages/Landing'
import CreateAccount from './pages/CreateAccount'
import Account from './pages/Account'
import './custom.scss'
import axios from 'axios'
import { UserProfileContext } from './components/UserProfileContext'

const App = () => {
  //create vars to hold/set user in state
  const [user, setUser] = useState({})
  //create vars and set equal to token and email from localstorage
  const token = localStorage.getItem('token')
  const email = localStorage.getItem('email')

  //set function to reload user for UserProfileContext
  const reloadUser = async email => {
    return await axios
      .get('/api/user/profile/' + email, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUser(response.data)
        console.log(response.data)
      })
  }

  //create a var to hold the data from user profile context
  const userProfile = { user: user, reloadUser: reloadUser }

  //set useEffect to reload the user any time the token changes
  useEffect(() => {
    reloadUser(email)
  }, [token])

  return (
    <>
      <UserProfileContext.Provider value={userProfile}>
        <Header></Header>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/Home/:id" component={Home}></Route>
            <Route
              exact
              path="/CharacterDetails/:id"
              component={CharacterDetails}
            ></Route>
            <Route
              exact
              path="/CreateCharacter"
              component={CreateCharacter}
            ></Route>
            <Route exact path="/CreateStat/:id" component={CreateStat}></Route>
            <Route
              exact
              path="/CreateSkill/:id"
              component={CreateSkill}
            ></Route>

            <Route
              exact
              path="/CreateAccount"
              component={CreateAccount}
            ></Route>
            <Route exact path="/Account/:user" component={Account}></Route>
          </Switch>
        </Router>
      </UserProfileContext.Provider>
    </>
  )
}

export default App
