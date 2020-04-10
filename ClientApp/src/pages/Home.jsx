import React from 'react'
import { Link } from 'react-router-dom'
import CharacterLI from '../components/CharacterLI'
import { useUserProfile } from '../components/UserProfileContext'

const Home = () => {
  //set var for use of user profile context
  const userProfile = useUserProfile()
  console.log(userProfile.user)

  if (!userProfile) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div className="Welcome">
        <div className="Site-Icon"></div>
        <h4>Welcome back, {userProfile.user.userFirst}.</h4>
      </div>
      {userProfile.user.Characters !== null ? (
        <div className="Nothing-Here">
          You have not created any characters. Click{' '}
          <span>
            <Link to="/CreateCharacter">
              <span className="Landing-Span">here</span>
            </Link>
          </span>{' '}
          to create a character.
        </div>
      ) : (
        <main className="Home-Characters">
          <ul className="Characters-List">
            {userProfile.user.Characters.map(character => {
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
