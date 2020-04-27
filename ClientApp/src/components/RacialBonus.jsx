import React, { useState, useEffect } from 'react'

const RacialBonus = props => {
  console.log(props)
  const characterRace = props.characterRace
  const [subraceWasSelected, setSubraceWasSelected] = useState(false)
  const [size, setSize] = useState()
  const [
    subraceAbilityScoreIncrease,
    setSubraceAbilityScoreIncrease,
  ] = useState('')
  const [subraceHPBonus, setSubraceHPBonus] = useState('')
  const [subraceArmorProf, setSubraceArmorProf] = useState('')
  const [subraceWeaponProf, setSubraceWeaponProf] = useState('')
  const [subraceAdditionalBonus, setSubraceAdditionalBonus] = useState('')
  const [abilityScoreIncrease, setAbilityScoreIncrease] = useState()
  const [speed, setSpeed] = useState()
  const [racePlural, setRacePlural] = useState('')
  const [savingThrowBonuses, setSavingThrowBonuses] = useState()
  const [weaponProficiencies, setWeaponProficiencies] = useState('')
  const [toolProficiencies, setToolProficiencies] = useState({})
  const [subrace, setSubrace] = useState({})
  const [skillBonuses, setSkillBonuses] = useState('')
  const [languages, setLanguages] = useState('')
  const [toolProf, setToolProf] = useState('')
  const [additionalRaceBonuses, setAdditionalRaceBonuses] = useState('')
  const [darkvision, setDarkvision] = useState()

  useEffect(() => {
    updateSize(characterRace)
    updateRacialBonus(characterRace)
  }, [characterRace])

  const updateSize = characterRace => {
    if (characterRace === 'Gnome' || 'Halfling') {
      setSize('Small')
    } else {
      setSize('Medium')
    }
  }

  useEffect(() => {
    updateSubraceBonus(subrace)
  }, [subraceWasSelected])

  const updateSubrace = e => {
    setSubrace(e.target.value)
    setSubraceWasSelected(true)
  }

  const updateSubraceBonus = subrace => {
    if (subrace === 'Hill Dwarf') {
      setSubraceAbilityScoreIncrease('Wisdom + 1')
      setSubraceHPBonus('HP Max +1, HP Max +1 at every level')
      setSubraceWeaponProf('')
      setSubraceArmorProf('')
      setSubraceAdditionalBonus('')
    } else if (subrace === 'Mountain Dwarf') {
      setSubraceAbilityScoreIncrease('Strength + 2')
      setSubraceHPBonus('')
      setSubraceWeaponProf('')
      setSubraceArmorProf('Light Armor, Medium Armor')
      setSubraceAdditionalBonus('')
    } else if (subrace === 'High Elf') {
      setSubraceAbilityScoreIncrease('Intelligence + 1')
      setSubraceHPBonus('')
      setSubraceWeaponProf('Shortsword, Longsword, Shortbow, Longbow')
      setSubraceArmorProf('')
      setSubraceAdditionalBonus(
        '1. Gain one extra language of your choice. 2. Gain one cantrip of your choice from the wizard spell list.'
      )
    } else if (subrace === 'Wood Elf') {
      setSubraceAbilityScoreIncrease('Wisdom + 1')
      setSubraceHPBonus('')
      setSubraceWeaponProf('Shortsword, Longsword, Shortbow, Longbow')
      setSubraceArmorProf('')
      setSpeed(35)
      setSubraceAdditionalBonus(
        '1. Base Walking speed increases to 35 feet. 2. You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, or other natural phenomena.'
      )
    } else if (subrace === 'Lightfoot Halfling') {
      setSubraceAbilityScoreIncrease('Charisma + 1')
      setSubraceHPBonus('')
      setSubraceWeaponProf('')
      setSubraceArmorProf('')
      setSubraceAdditionalBonus(
        'You can attempt to hide even when you are obscured only by a creature one size larger than you.'
      )
    } else if (subrace === 'Stout Halfling') {
      setSubraceAbilityScoreIncrease('Constitution + 1')
      setSubraceHPBonus('')
      setSubraceWeaponProf('')
      setSubraceArmorProf('')
      setSubraceAdditionalBonus(
        '1. You have advantage on saving throws against poison. 2. You have resistance against poison damage.'
      )
    }
  }

  const updateRacialBonus = characterRace => {
    if (characterRace === 'Dwarf') {
      setRacePlural('Dwarves')
      setDarkvision(60)
      setAbilityScoreIncrease('Constitution + 2')
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
      setSpeed(25)
      setLanguages('Common, Dwarven,')
      setAdditionalRaceBonuses('')
      setSubrace({
        subrace1: 'Hill Dwarf',
        subrace2: 'Mountain Dwarf',
      })
    } else if (characterRace === null) {
      setRacePlural('')
      setDarkvision(0)
      setAbilityScoreIncrease('')
      setSavingThrowBonuses('')
      setWeaponProficiencies('')
      setToolProficiencies({})
      setSkillBonuses('')
      setSpeed(0)
      setLanguages('')
      setAdditionalRaceBonuses('')
      setSubrace({})
    } else if (characterRace === 'Elf') {
      setRacePlural('Elves')
      setDarkvision(60)
      setAbilityScoreIncrease('Dexterity + 2')
      setSavingThrowBonuses(
        'Advantage on saving throws against being charmed, immunity to magical sleep,'
      )
      setWeaponProficiencies('')
      setToolProficiencies({})
      setSkillBonuses('Proficiency in the Perception skill,')
      setAdditionalRaceBonuses(
        'Trance: going into a deep meditative state for 4 hours provides a Full Rest,'
      )
      setSpeed(30)
      setLanguages('Common, Elvish,')
      setSubrace({
        subrace1: 'High Elf',
        subrace2: 'Wood Elf',
      })
    } else if (characterRace === 'Halfling') {
      setRacePlural('Halflings')
      setDarkvision(0)
      setAbilityScoreIncrease('Dexterity + 2')
      setSavingThrowBonuses('Advantage on saving throws against fear,')
      setWeaponProficiencies('')
      setToolProficiencies({})
      setSkillBonuses('')
      setAdditionalRaceBonuses(
        '1. Lucky: when you roll a 1 on d20 for an attack/ability check/saving throw you can reroll and must use the reroll, 2. Nimble: you can move through the space of any creature that is a size larger than you,'
      )
      setSpeed(25)
      setLanguages('Common, Halfling,')
      setSubrace({
        subrace1: 'Lightfoot Halfling',
        subrace2: 'Stout Halfling',
      })
    } else if (characterRace === 'Human') {
      setRacePlural('Humans')
      setDarkvision(0)
      setAbilityScoreIncrease('All Scores + 1')
      setSavingThrowBonuses('Advantage on saving throws against fear,')
      setWeaponProficiencies('')
      setToolProficiencies({})
      setSkillBonuses('')
      setAdditionalRaceBonuses('')
      setSpeed(30)
      setLanguages('Common,')
      setSubrace({})
    } else if (characterRace === 'Dragonborn') {
    }
  }

  const returnDataToParent = () => {
    const racialBonuses = {
      size: size,
      languages: languages,
      subrace: subrace,
      speed: speed,
      savingThrowBonuses: savingThrowBonuses,
      weaponProficiencies: weaponProficiencies,
      toolProficiencies: toolProficiencies,
      skillBonuses: skillBonuses,
      toolProf: toolProf,
      additionalRaceBonuses: additionalRaceBonuses,
      darkvision: darkvision,
      subraceWeaponProf: subraceWeaponProf,
      subraceArmorProf: subraceArmorProf,
    }
    this.props.callbackFromParent(racialBonuses)
  }

  return (
    <div>
      <div className="Race-Bonus-Parent">
        <div className="Race-Bonus">
          <h5>
            {racePlural} have the following attributes:<br></br>
            1. Racial Ability Score Increase: {abilityScoreIncrease}
            <br></br>
            2. Size: {size}
            <br></br>
            3. Speed: {speed}ft.<br></br>
            4. Darkvision: {darkvision} ft.<br></br>
            5. Saving Throw Bonuses: {savingThrowBonuses}
            <br></br>
            6. Weapon Proficiency: {weaponProficiencies}
            <br></br>
            7. Tool Proficiency:
            {toolProficiencies === {} ? (
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
            {characterRace === 'Human' ||
            'Half-Elf' ||
            subrace === 'High Elf' ? (
              <>
                <div className="Get-Additional">
                  9. Your base languages are: {languages} <br></br> You will
                  select another language further on.
                </div>
              </>
            ) : (
              <>
                <div className="Base-Languages">9. Languages: {languages}</div>
              </>
            )}
            <br></br>
            10. Additional Racial Bonus(es): {additionalRaceBonuses}
            {characterRace === 'Elf' || 'Dwarf' || 'Gnome' || 'Halfling' ? (
              <>
                11. Select one of the following {characterRace} subraces:
                <input
                  className="subrace"
                  name="subrace1"
                  type="radio"
                  value={subrace.subrace1}
                  onChange={updateSubrace}
                >
                  {' '}
                  {subrace.subrace1}{' '}
                </input>
                <input
                  className="subrace"
                  name="subrace2"
                  type="radio"
                  value={subrace.subrace2}
                  onChange={updateSubrace}
                >
                  {' '}
                  {subrace.subrace2}{' '}
                </input>
              </>
            ) : (
              <></>
            )}
            {subrace === '' ? (
              <> </>
            ) : (
              <>
                <div className="Subrace-Bonuses">
                  <h5>
                    A {subrace} gains the following additional<br></br>
                    bonuses:<br></br>
                    Stats: {subraceAbilityScoreIncrease}
                    Subrace HP Bonus: {subraceHPBonus}
                    Subrace Weapon Proficiencies: {subraceWeaponProf}
                    Subrace Armor Proficiencies: {subraceArmorProf}
                    Subrace Additional Bonus(es): {subraceAdditionalBonus}
                  </h5>
                </div>
              </>
            )}
            <div className="Login-Button-Div">
              <button className="Login-Button" onClick={returnDataToParent}>
                Save Race/Subrace
              </button>
            </div>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default RacialBonus
