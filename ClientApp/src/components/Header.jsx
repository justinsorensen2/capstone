import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
  // const userId = parseInt(props.match.params.id)
  return (
    <main className="Header">
      <header>
        <Link to="/Home:userId">
          <button className="Header-Button">Home</button>
        </Link>
        <Link to="/CreateCharacter:userId">
          <button className="Header-Button">Create</button>
        </Link>
        <Link to="/Account:userId">
          <button className="Header-Button">Account</button>
        </Link>
      </header>
    </main>
  )
}

export default Header
