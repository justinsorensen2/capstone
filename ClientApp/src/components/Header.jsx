import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
  const id = parseInt(props.id)
  return (
    <main className="Header">
      <header>
        <a href={`/Home/${id}`}>
          <button className="Header-Button">Home</button>
        </a>
        <a href={`/CreateCharacter/${id}`}>
          <button className="Header-Button">Create</button>
        </a>
        <a href="/">
          <button className="Header-Button">Log Out</button>
        </a>
      </header>
    </main>
  )
}

export default Header
