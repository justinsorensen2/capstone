import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CharacterLI from '../components/CharacterLI'

const Home = props => {
  const email = props.match.params.who
  //set vars for use of state
  const [user, setUser] = useState()

  //poll api for user details
  const getUser = async () => {
    const response = await axios.get(`/api/User/${email}`)
    setUser(response.data)
  }

  if (!user) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div className="Welcome">
        <div className="Site-Icon"></div>
        <h4>Welcome back, {user.userFirst}.</h4>
      </div>
      <main className="Home-Characters">
        <ul className="Characters-List">
          {user.characters.length > 0 ? (
            user.characters.map(character => {
              return (
                <Link
                  to={`/CharacterDetails/${character.id}`}
                  user={user}
                  characterId={character.id}
                >
                  <CharacterLI
                    key={character.id}
                    characterFirst={character.characterFirst}
                    characterLast={character.characterLast}
                    characterClass={character.characterClass}
                    characterLevel={character.primaryClassLevel}
                    characterImage={character.imagePath}
                  />
                </Link>
              )
            })
          ) : (
            <div className="Nothing-Here">
              You have not created any characters. Click{' '}
              <span>
                <Link to="/CreateCharacter" user={user}>
                  <span className="Landing-Span">here</span>
                </Link>
              </span>{' '}
              to create a character.
            </div>
          )}
        </ul>
      </main>
    </div>
  )
}

export default Home
