import React, { useState } from 'react'
import CreateAccount from './CreateAccount'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useUserProfile } from '../components/UserProfileContext'
import axios from 'axios'

//react landing page function
const Landing = () => {
  //declare initial state for email and pass
  const [email, setEmail] = useState('')
  const [userPass, setUserPass] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const userProfile = useUserProfile()

  //set function for authorization via API and token
  const loginToAPI = async () => {
    const resp = await axios.post('/auth/login', {
      Email: email,
      Password: userPass,
    })
    if (resp.status === 200) {
      console.log(resp.data)
      localStorage.setItem('token', resp.data.token)
      localStorage.setItem('email', email)
      setShouldRedirect(true)
    }
  }
  //if user logged in, redirect to user home, else render login page
  if (shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/Home/${userProfile}`,
          state: { who: email },
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
                Email Address:
                <input
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
