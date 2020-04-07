import React from 'react'

const Home = (props) => {
  const [authenticated, userId] = props
  return <div>Welcome, loggedInUser</div>
}

export default Home
