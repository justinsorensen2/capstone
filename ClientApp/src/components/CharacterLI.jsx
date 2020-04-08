import React from 'react'

const CharacterLI = props => {
  const character = props

  return (
    <div className="CharacterLI">
      <img src={character.imagePath} className="Character-Image" />
      <h5>
        {character.characterFirst}
        {''}
        {character.characterLast}
      </h5>
      <p>
        Primary Class: {character.characterClass} Level:{' '}
        {character.characterLevel}
      </p>
    </div>
  )
}

export default CharacterLI
