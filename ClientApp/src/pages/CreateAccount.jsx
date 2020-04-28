import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { useUserProfile } from '../components/UserProfileContext'

const CreateAccount = () => {
  //create state variables
  const [userPass, setUserPass] = useState('')
  const [userFirst, setUserFirst] = useState('')
  const [userLast, setUserLast] = useState('')
  const [email, setEmail] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)

  //set function for adding user to API
  const registerNewUser = async e => {
    e.preventDefault()
    const resp = await axios.post('/auth/register', {
      UserFirst: userFirst,
      UserLast: userLast,
      Email: email,
      UserPass: userPass,
    })
    console.log(resp)
    if (resp.status === 200) {
      // redirect page to the home
      localStorage.setItem('token', resp.data.token)
      localStorage.setItem('email', email)
      setShouldRedirect(true)
    } else {
      //display an error message
      throw new MessageEvent()
    }
  }
  //set var to hold data from user profile context
  const userProfile = useUserProfile()

  //render
  if (shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/Home/${userProfile.user}`,
          state: { who: email },
        }}
      />
    )
  } else {
    return (
      <>
        <article className="Register-Flex">
          <section className="Register-Parent">
            <div className="Register">
              <form className="Register-Form" onSubmit={registerNewUser}>
                <div className="Site-Icon" />
                <h3>Enter your account details.</h3>
                <h5>
                  First Name:
                  <input
                    name="userFirst"
                    value={userFirst}
                    type="text"
                    onChange={e => setUserFirst(e.target.value)}
                  />
                </h5>
                <h5>
                  Last Name:
                  <input
                    name="userLast"
                    value={userLast}
                    type="text"
                    onChange={e => setUserLast(e.target.value)}
                  />
                </h5>
                <h5>
                  Email Address:
                  <input
                    name="email"
                    value={email}
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                  />
                </h5>
                <p>
                  <span>
                    Please note: your email will be your login username.
                  </span>
                </p>
                <h5>
                  Password:
                  <input
                    name="userPass"
                    value={userPass}
                    type="password"
                    onChange={e => setUserPass(e.target.value)}
                  />
                </h5>
                <div className="Register-Button-Div">
                  <button className="Register-Button" onClick={registerNewUser}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </section>
        </article>
      </>
    )
  }
}

export default CreateAccount
