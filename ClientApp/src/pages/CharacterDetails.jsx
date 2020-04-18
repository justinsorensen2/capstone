import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CharacterDetails = props => {
  //set charId based on props from url
  const characterId = props.match.params.id

  const [character, setCharacter] = useState()
  const [stat, setStat] = useState()

  //axios get for character details
  const getCharacterDetails = async characterId => {
    return await axios.get('/api/character/', characterId).then(response => {
      //set var for character from axios get
      setCharacter(response.data)
      console.log('character get' + response.data)
    })
  }

  const getStatDetails = async characterId => {
    return await axios.get('/api/stat/', characterId).then(response => {
      //set var for character from axios get
      setStat(response.data)
      console.log('stat get' + response.data)
    })
  }

  //useEffect to call axios get when page loads
  useEffect(() => {
    getCharacterDetails(characterId)
    getStatDetails(characterId)
  }, [characterId])

  //render
  if (!stat) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <article className="Char-Details-Flex">
        <section className="Char-Details-Parent">
          <div className="Char-Details">
            <div className="Name-Class-Level">
              <div className="Name">
                Character: {character.characterFirst}
                {''}
                {character.characterLast}
              </div>
              <div className="Primary-Class">
                Class: {character.characterClass}
              </div>
              <div className="Primary-Class-Level">
                Class Level: {character.primaryClassLevel}
              </div>
              {character.secondaryClass === '' ? (
                <>
                  <div></div>
                </>
              ) : (
                <>
                  <div className="Secondary-Class">
                    Secondary Class: {character.secondaryClass}
                  </div>
                  <div className="Secondary-Class-Level">
                    Secondary Class Level: {character.secondaryClassLevel}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export default CharacterDetails
