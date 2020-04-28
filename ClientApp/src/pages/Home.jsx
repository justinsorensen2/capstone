import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CharacterLI from '../components/CharacterLI'
import { useUserProfile } from '../components/UserProfileContext'
import axios from 'axios'

const Home = props => {
  const userId = parseInt(props.match.params.id)
  //set var for use of user profile context
  const userProfile = useUserProfile()
  const user = userProfile.user
  const [characters, setCharacters] = useState()

  console.log(userId)

  const getCharacters = async userId => {
    return await axios
      .get(`/api/character/charlist/${userId}`)
      .then(response => {
        //set var for character from axios get
        setCharacters(response.data)
      })
  }
  //call useEffect to getCharacters when page loads
  useEffect(() => {
    getCharacters(userId)
  }, [])

  if (!userProfile) {
    return <div>Loading...</div>
  }
  return (
    <div className="Landing-Flex">
      <div className="Landing-Parent">
        <div className="Landing-Form">
          <div className="Site-Icon"></div>
          <h4>Welcome back, {user.userFirst}.</h4>
        </div>
        {!characters ? (
          <div className="Nothing-Here">
            You have not created any characters. Click{' '}
            <span>
              <Link to={`/CreateCharacter/${userId}`}>
                <span className="Landing-Span">here</span>
              </Link>
            </span>{' '}
            to create a character.
          </div>
        ) : (
          <main className="Home-Characters">
            <ol className="Characters-List">
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
            </ol>
            <h5>Click on one of your characters above to access their info.</h5>
          </main>
        )}
      </div>
    </div>
  )
}

export default Home
