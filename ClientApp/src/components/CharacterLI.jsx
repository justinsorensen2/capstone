import React from 'react'

const CharacterLI = props => {
  const character = props

  return (
    <div className="Character-List">
      <div className="Character-Icon" />
      <div className="Character-List-Item">
        <h5>
          {character.characterFirst}
          {'  '}
          {character.characterLast}
        </h5>
        <p>
          Primary Class: {character.characterClass} Level:{' '}
          {character.characterLevel}
        </p>
      </div>
    </div>
  )
}

export default CharacterLI
