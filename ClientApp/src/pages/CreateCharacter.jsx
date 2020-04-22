import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const CreateCharacter = () => {
  const email = localStorage.getItem('email')

  //set variables to hold user inputs in state
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [multiClass, setMultiClass] = useState()
  const [characterRace, setCharacterRace] = useState()
  const [character, setCharacter] = useState({})
  const [user, setUser] = useState()
  const [characterAge, setCharacterAge] = useState()
  const [primaryClassLevel, setPrimaryClassLevel] = useState()
  const [secondaryClassLevel, setSecondaryClassLevel] = useState()
  const [darkvision, setDarkvision] = useState()
  const [size, setSize] = useState()
  const [alignment, setAlignment] = useState()
  const [alignmentIsValid, setAlignmentIsValid] = useState(true)
  const [newlyCreatedCharId, setNewlyCreatedCharId] = useState()

  // const [languages, setLanguages] = useState('')
  // let [language] = [
  //   { name: 'Common', isChecked: false, category: 'Standard' },
  //   { name: 'Dwarvish', isChecked: false, category: 'Standard' },
  //   { name: 'Elvish', isChecked: false, category: 'Standard' },
  //   { name: 'Giant', isChecked: false, category: 'Standard' },
  //   { name: 'Gnomish', isChecked: false, category: 'Standard' },
  //   { name: 'Goblin', isChecked: false, category: 'Standard' },
  //   { name: 'Halfling', isChecked: false, category: 'Standard' },
  //   { name: 'Orc', isChecked: false, category: 'Standard' },
  //   { name: 'Abyssal', isChecked: false, category: 'Exotic' },
  //   { name: 'Celestial', isChecked: false, category: 'Exotic' },
  //   { name: 'Draconic', isChecked: false, category: 'Exotic' },
  //   { name: 'Deep Speech', isChecked: false, category: 'Exotic' },
  //   { name: 'Infernal', isChecked: false, category: 'Exotic' },
  //   { name: 'Primordial', isChecked: false, category: 'Exotic' },
  //   { name: 'Sylvan', isChecked: false, category: 'Exotic' },
  //   { name: 'Undercommon', isChecked: false, category: 'Exotic' },
  // ]
  // //update value of languages when checked
  // const setLanguage = props => {
  //   const langName = toString(props)
  //   const id = language.indexOf(langName)
  //   console.log(langName)
  //   language[id].isChecked = true
  // }

  // //add the name of the checked language
  // const addCheckedToString = () => {
  //   for (let i = 0; (i = language.length); i++) {
  //     if (language.isChecked === true) {
  //       languages += language.name
  //     }
  //   }
  //   console.log(languages)
  // }

  //run the addCheckedToString function each time language.isChecked changes
  // useEffect(() => {
  //   addCheckedToString()
  // }, [language.isChecked])

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

  const updateAlignment = e => {
    const alignmentText = e.target.value
    const alignmentUpper = alignmentText.toUpperCase()
    if (
      alignmentUpper === 'LG' ||
      alignmentUpper === 'NG' ||
      alignmentUpper === 'CG' ||
      alignmentUpper === 'LN' ||
      alignmentUpper === 'N' ||
      alignmentUpper === 'CN' ||
      alignmentUpper === 'LE' ||
      alignmentUpper === 'NE' ||
      alignmentUpper === 'CE'
    ) {
      setAlignment(alignmentUpper)
      setAlignmentIsValid(true)
    } else {
      setAlignmentIsValid(false)
    }
  }

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
  }, [email, alignment])

  //update race and darkvision
  const updateCharacterRace = e => {
    setCharacterRace(e.target.value)
    if (
      characterRace === 'Gnome' ||
      'Elf' ||
      'Half-Elf' ||
      'Dwarf' ||
      'Half-Orc' ||
      'Tiefling'
    ) {
      setDarkvision(60)
    } else {
      setDarkvision(0)
    }
    if (characterRace === 'Gnome' || 'Halfling') {
      setSize('Small')
    } else {
      setSize('Medium')
    }
  }

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
                <input
                  name="alignment"
                  type="text"
                  onChange={updateAlignment}
                />
              </h5>
              {alignmentIsValid === false ? (
                <>
                  <div>
                    <h5>
                      <span>
                        That is not a valid alignment.<br></br>Please enter one
                        of: <br></br>LG for lawful good, <br></br>NG for neutral
                        good, <br></br>CG for chaotic good, <br></br>LN for
                        lawful neutral, <br></br>N for true neutral,
                        <br></br>CN for chaotic neutral, <br></br>LE for lawful
                        evil, <br></br>NE for neutral evil, <br></br>CE for
                        chaotic evil.
                      </span>
                    </h5>
                  </div>
                </>
              ) : (
                <></>
              )}
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
                  onChange={updateCharacterRace}
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
                  <div className="Standard-Languages-Parent">
                    Standard:
                    <ul className="Standard-Languages">
                      <li>
                        <input
                          name="Common"
                          category="Standard"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Common
                      </li>
                      <li>
                        <input
                          id="1"
                          name="Dwarvish"
                          category="Standard"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Dwarvish
                      </li>
                      <li>
                        <input
                          id="2"
                          name="Elvish"
                          category="Standard"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Elvish
                      </li>
                      <li>
                        <input
                          id="3"
                          name="Giant"
                          category="Standard"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Giant
                      </li>
                      <li>
                        <input
                          id="4"
                          name="Gnomish"
                          category="Standard"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Gnomish
                      </li>
                      <li>
                        <input
                          id="5"
                          name="Goblin"
                          category="Standard"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Goblin
                      </li>
                      <li>
                        <input
                          id="6"
                          name="Halfling"
                          category="Standard"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Halfling
                      </li>
                      <li>
                        <input
                          id="7"
                          name="Orc"
                          category="Standard"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Orc
                      </li>
                    </ul>
                  </div>
                  <div className="Exotic-Languages-Parent">
                    Exotic:
                    <ul className="Exotic-Languages">
                      <li>
                        <input
                          id="8"
                          name="Abyssal"
                          category="Exotic"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Abyssal
                      </li>
                      <li>
                        <input
                          id="9"
                          name="Celestial"
                          category="Exotic"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Celestial
                      </li>
                      <li>
                        <input
                          id="10"
                          name="Draconic"
                          category="Exotic"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Draconic
                      </li>
                      <li>
                        <input
                          id="12"
                          name="Deep Speech"
                          category="Exotic"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Deep Speech
                      </li>
                      <li>
                        <input
                          id="13"
                          name="Infernal"
                          category="Exotic"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Infernal
                      </li>
                      <li>
                        <input
                          id="14"
                          name="Primordial"
                          category="Exotic"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Primordial
                      </li>
                      <li>
                        <input
                          id="15"
                          name="Sylvan"
                          category="Exotic"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Sylvan
                      </li>
                      <li>
                        <input
                          id="16"
                          name="Undercommon"
                          category="Exotic"
                          // onClick={e => setLanguage(e.target.id)}
                          type="checkbox"
                          // checked={language.isChecked}
                        />{' '}
                        Undercommon
                      </li>
                    </ul>
                  </div>
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
              <div className="Darkvision">
                <h5>Darkvision: {darkvision}ft.</h5>
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
