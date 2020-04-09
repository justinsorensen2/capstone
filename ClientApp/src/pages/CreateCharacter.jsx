import React, { useState } from 'react'
import axios from 'axios'

const CreateCharacter = props => {
  //set variables to hold user inputs in state
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [characterFirst, setCharacterFirst] = useState()
  const [characterLast, setCharacterLast] = useState()
  const [characterAge, setCharacterAge] = useState()
  const [characterRace, setCharacterRace] = useState()
  const [characterClass, setCharacterClass] = useState()
  const [multiClass, setMultiClass] = useState()
  const [secondaryClass, setSecondaryClass] = useState()
  const [primaryClassLevel, setPrimaryClassLevel] = useState()
  const [secondaryClassLevel, setSecondaryClassLevel] = useState()
  const [otherProficiencies, setOtherProficiencies] = useState()
  const [personalityTraits, setPersonalityTraits] = useState()
  const [ideals, setIdeals] = useState()
  const [bonds, setBonds] = useState()
  const [flaws, setFlaws] = useState()
  const [featuresTraits, setFeaturesTraits] = useState()
  const [alliesOrganizations, setAlliesOrganizations] = useState()
  const [backStory, setBackStory] = useState()
  const [treasure, setTreasure] = useState()
  const [languages, setLanguages] = useState([
    { name: 'Common', isChecked: false, category: 'Standard' },
    { name: 'Dwarvish', isChecked: false, category: 'Standard' },
    { name: 'Elvish', isChecked: false, category: 'Standard' },
    { name: 'Giant', isChecked: false, category: 'Standard' },
    { name: 'Gnomish', isChecked: false, category: 'Standard' },
    { name: 'Goblin', isChecked: false, category: 'Standard' },
    { name: 'Halfling', isChecked: false, category: 'Standard' },
    { name: 'Orc', isChecked: false, category: 'Standard' },
    { name: 'Abyssal', isChecked: false, category: 'Exotic' },
    { name: 'Celestial', isChecked: false, category: 'Exotic' },
    { name: 'Draconic', isChecked: false, category: 'Exotic' },
    { name: 'Deep Speech', isChecked: false, category: 'Exotic' },
    { name: 'Infernal', isChecked: false, category: 'Exotic' },
    { name: 'Primordial', isChecked: false, category: 'Exotic' },
    { name: 'Sylvan', isChecked: false, category: 'Exotic' },
    { name: 'Undercommon', isChecked: false, category: 'Exotic' },
  ])

  const addCheckedToString = () => {}

  //axios post to create character
  const createNewCharacter = async e => {
    e.preventDefault()
    const resp = await axios.post('/character/create', {
      CharacterFirst: characterFirst,
      CharacterLast: characterLast,
      CharacterAge: characterAge,
      CharacterRace: characterRace,
      CharacterClass: characterClass,
      MultiClass: multiClass,
      SecondaryClass: secondaryClass,
      PrimaryClassLevel: primaryClassLevel,
      SecondaryClassLevel: secondaryClassLevel,
      Languages: languages,
      OtherProficiencies: otherProficiencies,
      PersonalityTraits: personalityTraits,
      Ideals: ideals,
      Bonds: bonds,
      Flaws: flaws,
      FeaturesTraits: featuresTraits,
      AlliesOrganizations: alliesOrganizations,
      BackStory: backStory,
      Treasure: treasure,
    })
    console.log(resp)
    if (resp.status === 200) {
      // redirect page to the home
      localStorage.setItem('characterPart1', resp.data)
      setShouldRedirect(true)
    } else {
      //display an error message
      throw new MessageEvent()
    }
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
                  onChange={e => setCharacterFirst(e.target.value)}
                />
              </h5>
              <h5>
                Last Name(optional):
                <input
                  name="characterLast"
                  type="text"
                  onChange={e => setCharacterLast(e.target.value)}
                />
              </h5>
              <h5>
                Age:
                <input
                  name="characterAge"
                  type="text"
                  onChange={e => setCharacterAge(e.target.value)}
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
              <h5>
                Class:
                <select
                  className="Char-Class"
                  name="characterClass"
                  type="text"
                  onChange={e => setCharacterClass(e.target.value)}
                >
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
                Multi-Class?
                <input
                  className="Multi-Class"
                  name="Yes"
                  type="radio"
                  checked={multiClass === true}
                  onChange={e => setMultiClass(true)}
                />{' '}
                Yes
                <input
                  className="Multi-Class"
                  name="No"
                  type="radio"
                  checked={multiClass === false}
                  onChange={e => setMultiClass(false)}
                />{' '}
                No
              </h5>
              <h5>
                Secondary Class:
                <select
                  className="Char-Class"
                  name="secondaryClass"
                  type="text"
                  onChange={e => setSecondaryClass(e.target.value)}
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
                Primary Class Level:
                <input
                  name="primaryClassLevel"
                  type="text"
                  onChange={e => setPrimaryClassLevel(e.target.value)}
                />
              </h5>
              <h5>
                Secondary Class Level:
                <input
                  name="secondaryClassLevel"
                  type="text"
                  onChange={e => setSecondaryClassLevel(e.target.value)}
                />
              </h5>
              <div className="Char-Languages">
                <h5>Languages</h5>
                <div className="Standard-Languages-Parent">
                  Standard:
                  <ul className="Standard-Languages">
                    <li>
                      <input
                        name="Common"
                        category="Standard"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Common
                    </li>
                    <li>
                      <input
                        name="Dwarvish"
                        category="Standard"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Dwarvish
                    </li>
                    <li>
                      <input
                        name="Elvish"
                        category="Standard"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Elvish
                    </li>
                    <li>
                      <input
                        name="Giant"
                        category="Standard"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Giant
                    </li>
                    <li>
                      <input
                        name="Gnomish"
                        category="Standard"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Gnomish
                    </li>
                    <li>
                      <input
                        name="Goblin"
                        category="Standard"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Goblin
                    </li>
                    <li>
                      <input
                        name="Halfling"
                        category="Standard"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Halfling
                    </li>
                    <li>
                      <input
                        name="Orc"
                        category="Standard"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Orc
                    </li>
                  </ul>
                </div>
                <div className="Exotic-Languages-Parent">
                  <ul className="Exotic-Languages">
                    <li>
                      <input
                        name="Abyssal"
                        category="Exotic"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Abyssal
                    </li>
                    <li>
                      <input
                        name="Celestial"
                        category="Exotic"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Celestial
                    </li>
                    <li>
                      <input
                        name="Draconic"
                        category="Exotic"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Draconic
                    </li>
                    <li>
                      <input
                        name="Deep Speech"
                        category="Exotic"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Deep Speech
                    </li>
                    <li>
                      <input
                        name="Infernal"
                        category="Exotic"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Infernal
                    </li>
                    <li>
                      <input
                        name="Primordial"
                        category="Exotic"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Primordial
                    </li>
                    <li>
                      <input
                        name="Sylvan"
                        category="Exotic"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Sylvan
                    </li>
                    <li>
                      <input
                        name="Undercommon"
                        category="Exotic"
                        onClick={addCheckedToString}
                        type="checkbox"
                        checked={props.isChecked}
                      />{' '}
                      Undercommon
                    </li>
                  </ul>
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
