import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const CreateCharacter = props => {
  const userId = parseInt(props.match.params.id)
  console.log(userId)
  const email = localStorage.getItem('email')

  //set variables to hold user inputs in state
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [multiClass, setMultiClass] = useState()
  const [characterRace, setCharacterRace] = useState()
  const [raceWasSelected, setRaceWasSelected] = useState(false)
  const [character, setCharacter] = useState({})
  const [user, setUser] = useState()
  const [characterAge, setCharacterAge] = useState()
  const [primaryClassLevel, setPrimaryClassLevel] = useState()
  const [secondaryClassLevel, setSecondaryClassLevel] = useState()
  const [darkvision, setDarkvision] = useState()
  const [size, setSize] = useState()
  const [alignment, setAlignment] = useState()
  const [newlyCreatedCharId, setNewlyCreatedCharId] = useState()
  const [abilityScoreIncrease, setAbilityScoreIncrease] = useState()
  const [speed, setSpeed] = useState()
  const [racePlural, setRacePlural] = useState('')
  const [savingThrowBonuses, setSavingThrowBonuses] = useState()
  const [weaponProficiencies, setWeaponProficiencies] = useState('')
  const [toolProficiencies, setToolProficiencies] = useState({})
  const [subrace, setSubrace] = useState({})
  const [skillBonuses, setSkillBonuses] = useState('')
  const [racialLanguages, setRacialLanguages] = useState('')
  const [toolProf, setToolProf] = useState('')

  //parse age to int
  const updateCharacterAge = e => {
    setCharacterAge(parseInt(e.target.value))
  }

  //parse primary class level to int
  const updatePrimaryClassLevel = e => {
    setPrimaryClassLevel(parseInt(e.target.value))
  }

  //parse secondary class level to int
  const updateSecondaryClassLevel = e => {
    setSecondaryClassLevel(parseInt(e.target.value))
  }

  const updateRacialBonus = characterRace => {
    if (characterRace === 'Dwarf') {
      setRaceWasSelected(true)
      setRacePlural('Dwarves')
      setDarkvision(60)
      setAbilityScoreIncrease()
      setSavingThrowBonuses('Advantage on saving throws against poison,')
      setWeaponProficiencies('BattleAxe, Handaxe, Light Hammer, Warhammer,')
      setToolProficiencies({
        toolChoice1: 'Smithing Tools',
        toolChoice2: 'Brewing Supplies',
        toolChoice3: 'Masonry Tools',
      })
      setSkillBonuses(
        'Stonecunning: add double proficiency bonus to any history check related to origin of stonework,'
      )
      setRacialLanguages('Common, Dwarven,')
      setSubrace({
        subrace1: 'Hill Dwarf',
        subrace2: 'Mountain Dwarf',
      })
    } else if (characterRace === null) {
      setRaceWasSelected(false)
    } else if (characterRace === 'Elf') {
    }
  }

  const updateSize = characterRace => {
    if (characterRace === 'Gnome' || 'Halfling') {
      setSize('Small')
    } else {
      setSize('Medium')
    }
  }

  useEffect(() => {
    updateSize(characterRace)
    updateRacialBonus(characterRace)
  }, [characterRace])

  //use api to get user
  const getUser = async email => {
    const resp = await axios.get('api/user/profile/' + email)
    if (resp.status === 200) {
      // redirect page to the home
      setUser(resp.data)
    } else {
      //display an error message
      throw new MessageEvent()
    }
  }

  //call useEffect to set user each time email changes
  useEffect(() => {
    getUser(email)
  }, [email])

  //create character data from user inputs
  const updateCharacterData = e => {
    const key = e.target.name
    const value = e.target.value
    setCharacter(prevCharacter => {
      prevCharacter[key] = value
      return prevCharacter
    })
  }

  //axios post to create character
  const createNewCharacter = async e => {
    character.multiClass = multiClass
    character.userId = user.id
    character.characterAge = characterAge
    character.characterRace = characterRace
    character.primaryClassLevel = primaryClassLevel
    character.secondaryClassLevel = secondaryClassLevel
    e.preventDefault()
    const resp = await axios.post(
      'api/character/create',
      character
      // { userProfile }
    )
    if (resp.status === 200 || resp.status === 201) {
      // redirect page to the stat creator
      console.log(resp.data)
      setNewlyCreatedCharId(resp.data.id)

      setShouldRedirect(true)
    } else {
      //display an error message
      throw new MessageEvent()
    }
  }

  //render
  if (shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/CreateStat/${newlyCreatedCharId}`,
          state: { who: user },
        }}
      />
    )
  }
  return (
    <div>
      <article className="Create-Char-Flex">
        <section className="Create-Char-Parent">
          <div className="Create-Char">
            <form className="Create-Char-Form" onSubmit={createNewCharacter}>
              <div className="Site-Icon" />
              <h3>Fill in your character's details.</h3>
              <h5>
                First Name:
                <input
                  name="characterFirst"
                  type="text"
                  onChange={updateCharacterData}
                />
              </h5>
              <h5>
                Last Name:
                <input
                  name="characterLast"
                  type="text"
                  onChange={updateCharacterData}
                />
              </h5>
              <h5>
                Alignment:
                <select
                  className="Char-Alignment"
                  name="alignment"
                  type="text"
                  onChange={updateCharacterData}
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
                  onChange={updateCharacterAge}
                />
              </h5>
              <h5>
                Race:
                <select
                  className="Char-Race"
                  name="characterRace"
                  type="text"
                  onChange={e => setCharacterRace(e.target.value)}
                >
                  <option value={null}>{''}</option>
                  <option value="Dragonborn">Dragonborn</option>
                  <option value="Dwarf">Dwarf</option>
                  <option value="Elf">Elf</option>
                  <option value="Gnome">Gnome</option>
                  <option value="Half-Elf">Half-Elf</option>
                  <option value="Halfling">Halfling</option>
                  <option value="Half-Orc">Half-Orc</option>
                  <option value="Human">Human</option>
                  <option value="Tiefling">Tiefling</option>
                </select>
              </h5>
              {raceWasSelected === true ? (
                <>
                  <div className="Race-Bonus-Parent">
                    <div className="Race-Bonus">
                      <h5>
                        {racePlural} have the following attributes:<br></br>
                        1. Constitution + 2<br></br>
                        2. Size: {size}
                        <br></br>
                        3. Speed: {speed}ft.<br></br>
                        4. Darkvision: {darkvision} ft.<br></br>
                        5. Saving Throw Bonuses: {savingThrowBonuses}
                        <br></br>
                        6. Weapon Proficiency: {weaponProficiencies}
                        <br></br>
                        7. Tool Proficiency:
                        {toolProficiencies === '' ? (
                          <>
                            {' '}
                            <div>N/A</div>
                          </>
                        ) : (
                          <>
                            Choose one of:
                            <input
                              className="Tool-Prof"
                              name="toolProficiency"
                              type="radio"
                              value={toolProficiencies.toolChoice1}
                              onChange={e => setToolProf(e.target.value)}
                            >
                              {' '}
                              {toolProficiencies.toolChoice1}{' '}
                            </input>
                            <input
                              className="Tool-Prof"
                              name="toolProficiency"
                              type="radio"
                              value={toolProficiencies.toolChoice2}
                              onChange={e => setToolProf(e.target.value)}
                            >
                              {' '}
                              {toolProficiencies.toolChoice2}{' '}
                            </input>
                            <input
                              className="Tool-Prof"
                              name="toolProficiency"
                              type="radio"
                              value={toolProficiencies.toolChoice3}
                              onChange={e => setToolProf(e.target.value)}
                            >
                              {' '}
                              {toolProficiencies.toolChoice3}{' '}
                            </input>
                          </>
                        )}
                        8. Skill Bonus(es): {skillBonuses}
                        <br></br>
                        9. Languages: {racialLanguages}
                        <br></br>
                        10. Select one of the following {characterRace}{' '}
                        subraces:
                      </h5>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              <h5>Size: {size}</h5>
              <h5>
                Class:
                <select
                  className="Char-Class"
                  name="characterClass"
                  type="text"
                  onChange={updateCharacterData}
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
                Class Level:
                <input
                  name="primaryClassLevel"
                  type="number"
                  onChange={updatePrimaryClassLevel}
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
                      onChange={updateCharacterData}
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
                      onChange={updateSecondaryClassLevel}
                    />
                  </h5>
                </>
              )}
              <div className="Char-Languages">
                <h5>Languages</h5>
                <div className="Char-Languages-Parent">
                  <input
                    type="text area"
                    name="languages"
                    className="Add-Languages"
                    defaultValue={racialLanguages}
                    onChange={updateCharacterData}
                  />
                </div>
              </div>
              <div className="Char-Personality-Traits">
                <h5>Personality Traits:</h5>
                <div className="Personality-Traits-Parent">
                  <input
                    type="text area"
                    name="personalityTraits"
                    className="Personality-Traits"
                    onChange={updateCharacterData}
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
                    onChange={updateCharacterData}
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
                    onChange={updateCharacterData}
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
                    onChange={updateCharacterData}
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
                    onChange={updateCharacterData}
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
                    onChange={updateCharacterData}
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
                    onChange={updateCharacterData}
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
                    onChange={updateCharacterData}
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
                    onChange={updateCharacterData}
                  />
                </div>
              </div>
              <div className="Create-Char-Button-Div">
                <button
                  className="Create-Char-Button"
                  onClick={createNewCharacter}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </article>
    </div>
  )
}

export default CreateCharacter
