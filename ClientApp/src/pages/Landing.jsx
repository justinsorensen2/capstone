import React, { Component, useState } from 'react'
import Header from '../components/Header'
import CreateAccount from './CreateAccount'
import { BrowserRouter as Link } from 'react-router-dom'

//react landing page function
const Landing = () => {
  //declare initial state for username and pass
  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')

  //set function for tracking user input of username
  const userNameTracker = e => {
    const uName = e.target.value
    setUserName(uName)
  }
  //set function for tracking user input of password
  const userPassTracker = e => {
    const uPass = e.target.value
    setUserPass(uPass)
  }
  const authenticateUser = () => {}
  return (
    <>
      <article className="Landing-Flex">
        <section className="Landing-Parent">
          <div className="Landing">
            <h2>D&D Character Creator</h2>
            <div className="Site-Icon-Parent">
              <div className="Site-Icon">i</div>
            </div>
            <h3>Login</h3>
            <h5>
              Username:
              <input type="text" onChange={userNameTracker} />
            </h5>
            <h5>
              Password:
              <input type="text" onChange={userPassTracker} />
            </h5>
            <button className="Login-Button" onClick={authenticateUser}>
              Login
            </button>
            <h4>
              New here? Please click{' '}
              <span>
                <Link to="/CreateAccount">here</Link>
              </span>{' '}
              to create an account.
            </h4>
          </div>
        </section>
      </article>
    </>
  )
}

export default Landing
