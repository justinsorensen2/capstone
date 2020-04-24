import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const CharacterUpdate = props => {
  const characterId = parseInt(props.match.params.id)
  console.log(characterId)
  //set var for data get from API to use state
  const [character, setCharacter] = useState({})
  //set vars for player inputs to be stored in state
  const [multiClass, setMultiClass] = useState()
  const [characterAge, setCharacterAge] = useState()
  const [experiencePoints, setExperiencePoints] = useState()
  const [primaryClassLevel, setPrimaryClassLevel] = useState()
  const [secondaryClass, setSecondaryClass] = useState()
  const [secondaryClassLevel, setSecondaryClassLevel] = useState()
  const [shouldRedirect, setShouldRedirect] = useState(false)

  //create var to hold updateType in state
  const [updateType, setUpdateType] = useState('character')

  //axios get for character details
  const getCharacterDetails = async characterId => {
    return await axios.get(`/api/character/${characterId}`).then(response => {
      //set var for character from axios get
      setCharacter(response.data)
      setPrimaryClassLevel(parseInt(response.data.primaryClassLevel))
      setExperiencePoints(parseInt(response.data.experiencePoints))
      setCharacterAge(parseInt(response.data.characterAge))
      setSecondaryClass(response.data.secondaryClass)
      setSecondaryClassLevel(parseInt(response.data.secondaryClassLevel))

      console.log('character get' + response.data)
    })
  }

  //call useEffect to load character details when component loads
  useEffect(() => {
    getCharacterDetails(characterId)
  }, [])

  const updateMultiClass = () => {
    setMultiClass(character.multiClass)
    if (multiClass === false) {
      setSecondaryClass('')
      setSecondaryClassLevel(null)
    }
  }

  //call use effect to update secondary class/level when multiclass=false
  useEffect(() => {
    updateMultiClass()
  }, [multiClass])

  //create character data from user inputs
  const updateCharacter = e => {
    const key = e.target.name
    const value = e.target.value
    setCharacter(prevCharacter => {
      return { ...prevCharacter, [key]: value }
    })
  }

  //axios put to update character
  const putCharacter = async e => {
    character.multiClass = multiClass
    character.characterAge = parseInt(characterAge)
    character.primaryClassLevel = parseInt(primaryClassLevel)
    character.secondaryClass = secondaryClass
    character.secondaryClassLevel = parseInt(secondaryClassLevel)
    character.experiencePoints = parseInt(experiencePoints)
    e.preventDefault()
    const resp = await axios.put('api/character/put', character)
    if (resp.status === 200 || resp.status === 201) {
      // redirect page to the stat creator
      console.log(resp.data)
      setShouldRedirect(true)
    } else {
      //display an error message
      throw new MessageEvent()
    }
  }

  if (shouldRedirect) {
    return <Redirect to={`/CharacterDetails/${characterId}`} />
  }

  //render
  return (
    <>
      <div className="Create-Char-Flex">
        <article className="Create-Char-Parent">
          <section className="Create-Char">
            <form className="Create-Char-Form" onSubmit={putCharacter}>
              <div className="Site-Icon" />
              <h3>Update Character Details</h3>
              <div className="Login-Button-Div">
                <button className="Login-Button" onClick={putCharacter}>
                  Submit
                </button>
              </div>
              <h5>
                Experience Points:
                <input
                  name="experiencePoints"
                  type="number"
                  defaultValue={experiencePoints}
                  onChange={e => setExperiencePoints(e.target.value)}
                />
              </h5>
              <h5>
                Class: {character.characterClass}
                <br></br>
                Class Level:
                <input
                  name="primaryClassLevel"
                  type="number"
                  defaultValue={primaryClassLevel}
                  onChange={e => setPrimaryClassLevel(e.target.value)}
                />
              </h5>
              <h5>
                Multi-Class?
                <input
                  className="Multi-Class"
                  name="multiClass"
                  type="radio"
                  checked={multiClass === true}
                  onChange={e => setMultiClass(true)}
                />{' '}
                Yes
                <input
                  className="Multi-Class"
                  name="multiClass"
                  type="radio"
                  checked={multiClass === false}
                  onChange={e => setMultiClass(false)}
                />{' '}
                No
              </h5>
              {multiClass === false ? (
                <>
                  <h5>Secondary Class: N/A</h5>
                  <h5>Secondary Class Level: N/A</h5>
                </>
              ) : (
                <>
                  <h5>
                    Secondary Class:
                    <select
                      className="Char-Class"
                      name="secondaryClass"
                      type="text"
                      defaultValue={character.secondaryClass}
                      onChange={updateCharacter}
                    >
                      <option value={null}>{''}</option>
                      <option value="Barbarian">Barbarian</option>
                      <option value="Bard">Bard</option>
                      <option value="Cleric">Cleric</option>
                      <option value="Druid">Druid</option>
                      <option value="Fighter">Fighter</option>
                      <option value="Monk">Monk</option>
                      <option value="Paladin">Paladin</option>
                      <option value="Ranger">Ranger</option>
                      <option value="Rogue">Rogue</option>
                      <option value="Sorcerer">Sorcerer</option>
                      <option value="Warlock">Warlock</option>
                      <option value="Wizard">Wizard</option>
                    </select>
                  </h5>
                  <h5>
                    Secondary Class Level:
                    <input
                      name="secondaryClassLevel"
                      type="number"
                      defaultValue={secondaryClassLevel}
                      onChange={e => setSecondaryClassLevel(e.target.value)}
                    />
                  </h5>
                </>
              )}
              <h5>
                Alignment:
                <select
                  className="Char-Alignment"
                  name="alignment"
                  type="text"
                  defaultValue={character.alignment}
                  onChange={updateCharacter}
                >
                  <option value={null}>{''}</option>
                  <option value="LG">LG - Lawful Good</option>
                  <option value="NG">NG - Neutral Good</option>
                  <option value="CG">CG - Chaotic Good</option>
                  <option value="LN">LN - Lawful Neutral</option>
                  <option value="N">N - True Neutral</option>
                  <option value="CN">CN - Chaotic Neutral</option>
                  <option value="LE">LE - Lawful Evil</option>
                  <option value="NE">NE - Neutral Evil</option>
                  <option value="CE">CE - Chaotic Evil</option>
                </select>
              </h5>
              <h5>
                Age:
                <input
                  name="characterAge"
                  type="number"
                  defaultValue={characterAge}
                  onChange={e => setCharacterAge(e.target.value)}
                />
              </h5>
              <div className="Char-Personality-Traits">
                <h5>Personality Traits:</h5>
                <div className="Personality-Traits-Parent">
                  <input
                    type="text area"
                    name="personalityTraits"
                    className="Personality-Traits"
                    defaultValue={character.personalityTraits}
                    onChange={updateCharacter}
                  />
                </div>
              </div>
              <div className="Char-Ideals">
                <h5>Ideals:</h5>
                <div className="Ideals-Parent">
                  <input
                    name="ideals"
                    type="text area"
                    className="Ideals"
                    defaultValue={character.ideals}
                    onChange={updateCharacter}
                  />
                </div>
              </div>
              <div className="Char-Bonds">
                <h5>Bonds:</h5>
                <div className="Bonds-Parent">
                  <input
                    name="bonds"
                    type="text area"
                    className="Bonds"
                    defaultValue={character.bonds}
                    onChange={updateCharacter}
                  />
                </div>
              </div>
              <div className="Char-Flaws">
                <h5>Flaws:</h5>
                <div className="Flaws-Parent">
                  <input
                    name="flaws"
                    type="text area"
                    className="Flaws"
                    defaultValue={character.flaws}
                    onChange={updateCharacter}
                  />
                </div>
              </div>
              <div className="Char-Features-Traits">
                <h5>Features and Traits:</h5>
                <div className="Features-Traits-Parent">
                  <input
                    name="featuresTraits"
                    type="text area"
                    className="Features-Traits"
                    defaultValue={character.featuresTraits}
                    onChange={updateCharacter}
                  />
                </div>
              </div>
              <div className="Char-BackStory">
                <h5>Backstory:</h5>
                <div className="BackStory-Parent">
                  <input
                    name="backStory"
                    type="text area"
                    className="BackStory"
                    defaultValue={character.backStory}
                    onChange={updateCharacter}
                  />
                </div>
              </div>
              <div className="Char-Allies-Orgs">
                <h5>Allies and Organizations:</h5>
                <div className="Allies-Orgs-Parent">
                  <input
                    name="alliesOrganizations"
                    type="text area"
                    className="Allies-Orgs"
                    defaultValue={character.alliesOrganizations}
                    onChange={updateCharacter}
                  />
                </div>
              </div>
              <div className="Char-Other-Proficiencies">
                <h5>Other Proficiencies:</h5>
                <div className="Other-Proficiencies-Parent">
                  <input
                    name="otherProficiencies"
                    type="text area"
                    className="Other-Proficiencies"
                    defaultValue={character.otherProficiencies}
                    onChange={updateCharacter}
                  />
                </div>
              </div>
              <div className="Char-Treasure">
                <h5>Treasure:</h5>
                <div className="Treasure-Parent">
                  <input
                    name="treasure"
                    type="text area"
                    className="Treasure"
                    defaultValue={character.treasure}
                    onChange={updateCharacter}
                  />
                </div>
              </div>
              <div className="Login-Button-Div">
                <button className="Login-Button" onClick={putCharacter}>
                  Submit
                </button>
              </div>
            </form>
          </section>
        </article>
      </div>
    </>
  )
}

export default CharacterUpdate
