import React, { Component, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const CreateAccount = () => {
  //create state variables
  const [newUser, setNewUser] = useState([])
  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')
  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)

  //set function for tracking user input
  const Tracker = (e) => {
    const fieldToUpdate = e.target.name
    const value = e.target.value
    console.log(fieldToUpdate, value)
  }
  //set function for submitting to API/database
  const Undecided = async (e) => {
    e.preventDefault()
    const resp = await axios.post('https://myfutureapi.com/api/users', newUser)
    console.log(resp)
    if (resp.status === 200) {
      // redirect page to the home
      setShouldRedirect(true)
    } else {
      //display an error message
      throw new MessageEvent()
    }
  }
  if (shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: '/Home',
          state: { who: newUser },
        }}
      />
    )
  } else {
    return (
      <>
        <Header />
        <form onSubmit={Undecided}>
          <h3>Please enter your account details.</h3>
          <h5>
            First Name:
            <input name="firstName" type="text" onChange={Tracker} />
          </h5>
          <h5>
            Last Name:
            <input name="lastName" type="text" onChange={Tracker} />
          </h5>
          <h5>
            Email:
            <input name="email" type="text" onChange={Tracker} />
          </h5>
          <h5>Please note: your email will be your login username.</h5>
          <h5>
            Password:
            <input type="text" onChange={Tracker} />
          </h5>
          <button className="LoginButton" onClick={Undecided}>
            Submit
          </button>
        </form>
      </>
    )
  }
}

export default CreateAccount
