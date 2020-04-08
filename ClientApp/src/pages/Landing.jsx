import React, { useState } from 'react'
import CreateAccount from './CreateAccount'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

//react landing page function
const Landing = () => {
  //declare initial state for username and pass
  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)

  //set function for authorization via API and token
  const loginToAPI = async () => {
    const resp = await axios.post('/auth/login', {
      email: userName,
      userpass: userPass,
    })
    if (resp.status === 200) {
      console.log(resp.data)
      localStorage.setItem('token', resp.data.token)
      setShouldRedirect(true)
    }
  }
  //if user logged in, redirect to user home, else render login page
  if (shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/Home/${userName}`,
          state: { who: userName },
        }}
      />
    )
  } else {
    return (
      <>
        <article className="Landing-Flex">
          <section className="Landing-Parent">
            <div className="Landing">
              <div className="Site-Icon" />
              <h2>D&D Character Creator</h2>
              <h5>
                Username:
                <input
                  type="text"
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                />
              </h5>
              <h5>
                Password:
                <input
                  type="password"
                  value={userPass}
                  onChange={e => setUserPass(e.target.value)}
                />
              </h5>
              <div className="Login-Button-Div">
                <button className="Login-Button" onClick={loginToAPI}>
                  Login
                </button>
              </div>
              <h4>
                New here? Please click{' '}
                <span>
                  <Link to="/CreateAccount">
                    <span className="Landing-Span">here</span>
                  </Link>
                </span>{' '}
                to create an account.
              </h4>
            </div>
          </section>
        </article>
        <Router>
          <Switch>
            <Route
              exact
              path="/CreateAccount"
              component={CreateAccount}
            ></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default Landing
