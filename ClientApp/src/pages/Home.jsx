import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CharacterLI from '../components/CharacterLI'
import { useUserProfile } from '../components/UserProfileContext'
import axios from 'axios'

const Home = () => {
  //set var for use of user profile context
  const userProfile = useUserProfile()
  const user = userProfile.user
  const userId = parseInt(user.Id)
  const [characters, setCharacters] = useState()

  const getCharacters = async userId => {
    return await axios.get('/api/character/list', userId).then(response => {
      //set var for character from axios get
      setCharacters(response.data)
      console.log('character get' + characters)
    })
  }

  useEffect(() => {
    getCharacters(userId)
  }, [userProfile])

  if (!userProfile) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div className="Welcome">
        <div className="Site-Icon"></div>
        <h4>Welcome back, {user.userFirst}.</h4>
      </div>
      {characters !== null ? (
        <div className="Nothing-Here">
          You have not created any characters. Click{' '}
          <span>
            <Link to="/CreateCharacter/">
              <span className="Landing-Span">here</span>
            </Link>
          </span>{' '}
          to create a character.
        </div>
      ) : (
        <main className="Home-Characters">
          <ul className="Characters-List">
            {characters.map(character => {
              return (
                <Link
                  to={`/CharacterDetails/${character.id}`}
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
            })}
          </ul>
        </main>
      )}
    </div>
  )
}

export default Home
