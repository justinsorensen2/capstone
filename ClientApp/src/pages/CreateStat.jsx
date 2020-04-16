import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const CreateStat = props => {
  const characterId = props.match.params.id
  const [entryType, setEntryType] = useState('manual')
  const [strMod, setStrMod] = useState()
  const [strength, setStrength] = useState()
  const [strBonus, setStrBonus] = useState(0)
  const [dexMod, setDexMod] = useState()
  const [dexterity, setDexterity] = useState()
  const [dexBonus, setDexBonus] = useState(0)
  const [conMod, setConMod] = useState()
  const [constitution, setConstitution] = useState()
  const [conBonus, setConBonus] = useState(0)
  const [intMod, setIntMod] = useState()
  const [intelligence, setIntelligence] = useState()
  const [intBonus, setIntBonus] = useState(0)
  const [wisMod, setWisMod] = useState()
  const [wisdom, setWisdom] = useState()
  const [wisBonus, setWisBonus] = useState(0)
  const [chaMod, setChaMod] = useState()
  const [charisma, setCharisma] = useState()
  const [chaBonus, setChaBonus] = useState(0)
  const [proficiencyBonus, setProficiencyBonus] = useState()
  const [inspiration, setInspiration] = useState()
  const [armorClass, setArmorClass] = useState()
  const [initiativeBonus, setInitiativeBonus] = useState()
  const [baseSpeed, setBaseSpeed] = useState()
  const [hitDie, setHitDie] = useState()
  const [totalHitDie, setTotalHitDie] = useState()
  const [currentHitDie, setCurrentHitDie] = useState()
  const [hitPointBonus, setHitPointBonus] = useState(0)
  const [maxHP, setMaxHP] = useState()
  const [currentHP, setCurrentHP] = useState()
  const [tempHP, setTempHP] = useState()
  const [baseAC, setBaseAC] = useState(10)
  const [strSavingThrow, setStrSavingThrow] = useState()
  const [strSavingThrowProf, setStrSavingThrowProf] = useState()
  const [dexSavingThrow, setDexSavingThrow] = useState()
  const [dexSavingThrowProf, setDexSavingThrowProf] = useState()
  const [conSavingThrow, setConSavingThrow] = useState()
  const [conSavingThrowProf, setConSavingThrowProf] = useState()
  const [intSavingThrow, setIntSavingThrow] = useState()
  const [intSavingThrowProf, setIntSavingThrowProf] = useState()
  const [wisSavingThrow, setWisSavingThrow] = useState()
  const [wisSavingThrowProf, setWisSavingThrowProf] = useState()
  const [chaSavingThrow, setChaSavingThrow] = useState()
  const [chaSavingThrowProf, setChaSavingThrowProf] = useState()
  const [deathSaveSuccess1, setDeathSaveSuccess1] = useState(false)
  const [deathSaveSuccess2, setDeathSaveSuccess2] = useState(false)
  const [deathSaveSuccess3, setDeathSaveSuccess3] = useState(false)
  const [deathSaveFailure1, setDeathSaveFailure1] = useState(false)
  const [deathSaveFailure2, setDeathSaveFailure2] = useState(false)
  const [deathSaveFailure3, setDeathSaveFailure3] = useState(false)
  const [stat, setStat] = useState()
  const [shouldRedirect, setShouldRedirect] = useState(false)
  let rolled = new Array()
  let droppedLowest = new Array()

  //function to update proficiencyBonus state
  const updateProficiencyBonus = e => {
    const score = parseInt(e.target.value)
    setProficiencyBonus(score)
  }

  //function to update str and strmod state
  const updateStr = e => {
    const score = parseInt(e.target.value) + parseInt(strBonus)
    const mod = Math.floor((score - 10) / 2)
    setStrMod(mod)
    setStrength(score)
  }

  //function to update dex and dexmod state,
  //then set baseAC and AC
  //then set initiative bonus
  const updateDex = e => {
    const score = parseInt(e.target.value) + parseInt(dexBonus)
    const mod = Math.floor((score - 10) / 2)
    setDexMod(mod)
    setDexterity(score)
    console.log(mod, mod + 10)
    setBaseAC(mod + 10)
    setArmorClass(baseAC)
    setInitiativeBonus(mod)
  }

  //function to update con and conmod state
  const updateCon = e => {
    const score = parseInt(e.target.value) + parseInt(conBonus)
    const mod = Math.floor((score - 10) / 2)
    setConMod(mod)
    setConstitution(score)
  }

  //function to update int and intmod state
  const updateInt = e => {
    const score = parseInt(e.target.value) + parseInt(intBonus)
    const mod = Math.floor((score - 10) / 2)
    setIntMod(mod)
    setIntelligence(score)
  }

  //function to update wis and wismod state
  const updateWis = e => {
    const score = parseInt(e.target.value) + parseInt(wisBonus)
    const mod = Math.floor((score - 10) / 2)
    setWisMod(mod)
    setWisdom(score)
  }

  //function to update cha and chamod state
  const updateCha = e => {
    const score = parseInt(e.target.value) + parseInt(chaBonus)
    const mod = Math.floor((score - 10) / 2)
    setChaMod(mod)
    setCharisma(score)
  }

  //function to update maxHP state
  const updateMaxHP = e => {
    const score = parseInt(e.target.value) + hitPointBonus
    setMaxHP(score)
  }

  //function to update Str saving throw
  const updateStrSavingThrow = () => {
    if (strSavingThrowProf === false) {
      setStrSavingThrow(strMod)
    } else {
      setStrSavingThrow(strMod + proficiencyBonus)
    }
  }

  //function to update Con saving throw
  const updateConSavingThrow = () => {
    if (conSavingThrowProf === false) {
      setConSavingThrow(conMod)
    } else {
      setConSavingThrow(conMod + proficiencyBonus)
    }
  }

  //function to update Int saving throw
  const updateIntSavingThrow = () => {
    if (intSavingThrowProf === false) {
      setIntSavingThrow(intMod)
    } else {
      setIntSavingThrow(intMod + proficiencyBonus)
    }
  }

  //function to update Cha saving throw
  const updateChaSavingThrow = () => {
    if (chaSavingThrowProf === false) {
      setChaSavingThrow(chaMod)
    } else {
      setChaSavingThrow(chaMod + proficiencyBonus)
    }
  }

  //function to update wis saving throw
  const updateWisSavingThrow = () => {
    if (wisSavingThrowProf === false) {
      setWisSavingThrow(wisMod)
    } else {
      setWisSavingThrow(wisMod + proficiencyBonus)
    }
  }

  useEffect(() => {
    if (dexSavingThrowProf) {
      setDexSavingThrow(dexMod + proficiencyBonus)
    } else {
      setDexSavingThrow(dexMod)
    }
  }, [dexSavingThrowProf, dexMod, proficiencyBonus])

  //create stat data from user inputs
  const updateStatData = e => {
    const key = e.target.name
    const value = e.target.value
    setStat(prevStat => {
      prevStat[key] = value
      return prevStat
    })
  }

  //axios post to save stats to database
  const createNewStat = async e => {
    stat.inspiration = inspiration
    stat.proficiencyBonus = proficiencyBonus
    stat.armorClass = armorClass
    stat.initiativeBonus = initiativeBonus
    stat.baseSpeed = baseSpeed
    stat.totalHitDie = totalHitDie
    stat.currentHitDie = currentHitDie
    stat.maxHP = maxHP
    stat.currentHP = currentHP
    stat.tempHP = tempHP
    stat.strength = strength
    stat.strMod = strMod
    stat.dexterity = dexterity
    stat.dexMod = dexMod
    stat.constitution = constitution
    stat.conMod = conMod
    stat.intelligence = intelligence
    stat.intMod = intMod
    stat.wisdom = wisdom
    stat.wisMod = wisMod
    stat.charisma = charisma
    stat.chaMod = chaMod
    stat.strSavingThrowProf = strSavingThrowProf
    stat.strSavingThrow = strSavingThrow
    stat.dexSavingThrowProf = dexSavingThrowProf
    stat.dexSavingThrow = dexSavingThrow
    stat.conSavingThrowProf = conSavingThrowProf
    stat.conSavingThrow = conSavingThrow
    stat.intSavingThrowProf = intSavingThrowProf
    stat.intSavingThrow = intSavingThrow
    stat.wisSavingThrowProf = wisSavingThrowProf
    stat.wisSavingThrow = wisSavingThrow
    stat.chaSavingThrowProf = chaSavingThrowProf
    setStat.chaSavingThrow = chaSavingThrow
    stat.characterId = characterId

    e.preventDefault()
    const resp = await axios.post('api/stat/create', stat)
    if (resp.status === 200 || resp.status === 201) {
      // redirect page to the skill creation
      setShouldRedirect(true)
      console.log(resp.data)
    } else {
      //display an error message
      throw new MessageEvent()
    }
  }

  //roll for stats
  const rollStats = () => {
    const score1 =
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6)
    const score2 =
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6)
    const score3 =
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6)
    const score4 =
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6)
    const score5 =
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6)
    const score6 =
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6)
    const score7 =
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6) +
      Math.round(Math.random() * 6)
    rolled.push(score1, score2, score3, score4, score5, score6, score7)
    var min = Math.min(...rolled)
    droppedLowest = rolled.filter(e => e !== min)
    console.log(droppedLowest)
    document.getElementById('btnRoll').disabled = 'disabled'
  }

  //render
  if (shouldRedirect) {
    return <Redirect to={`/CreateSkill/${characterId}`} />
  }
  return (
    <div>
      <article className="Create-Stat-Flex">
        <section className="Create-Stat-Parent">
          <div className="Create-Stat">
            <form className="Create-Stat-Form" onSubmit={createNewStat}>
              <div className="Site-Icon" />
              <h3>Statistics:</h3>
              <h5>
                Would your like to enter manually or roll for stats?
                <input
                  className="Stat-Entry-Type"
                  name="Manual"
                  type="radio"
                  checked={entryType === 'manual'}
                  onChange={e => setEntryType('manual')}
                />{' '}
                Manual{' '}
                <input
                  className="Stat-Entry-Type"
                  name="entryType"
                  type="radio"
                  checked={entryType === 'rolled'}
                  onChange={e => setEntryType('rolled')}
                />{' '}
                Roll{' '}
              </h5>
              {entryType === 'manual' ? (
                <>
                  <div className="Race-Class-Other">
                    <h5>Race/Class/Other Strength Bonus:</h5>
                    <div className="Race-Class-Other-Parent">
                      <input
                        name="strBonus"
                        defaultValue="0"
                        type="number"
                        className="Strength-Bonus"
                        onChange={e => setStrBonus(parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="Strength-Stat">
                    <h5>Strength:</h5>
                    <div className="Strength-Parent">
                      <input
                        name="strength"
                        type="number"
                        className="Strength"
                        onChange={updateStr}
                      />
                    </div>
                  </div>
                  <div className="Strength-Mod">
                    <h5>Strength Mod: {strMod}</h5>
                  </div>
                  <div className="Race-Class-Other">
                    <h5>Race/Class/Other Dexterity Bonus:</h5>
                    <div className="Race-Class-Other-Parent">
                      <input
                        name="dexBonus"
                        type="number"
                        defaultValue="0"
                        className="Dexterity-Bonus"
                        onChange={e => setDexBonus(parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="Dexterity-Stat">
                    <h5>Dexterity:</h5>
                    <div className="Dexterity-Parent">
                      <input
                        name="dexterity"
                        type="number"
                        className="Dexterity"
                        onBlur={updateDex}
                      />
                    </div>
                  </div>
                  <div className="Dexterity-Mod">
                    <h5>Dexterity Mod: {dexMod}</h5>
                  </div>
                  <div className="Race-Class-Other">
                    <h5>Race/Class/Other Constitution Bonus:</h5>
                    <div className="Race-Class-Other-Parent">
                      <input
                        name="conBonus"
                        type="number"
                        defaultValue="0"
                        className="Constitution-Bonus"
                        onChange={e => setConBonus(parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="Constitution-Stat">
                    <h5>Constitution:</h5>
                    <div className="Constitution-Parent">
                      <input
                        name="constitution"
                        type="number"
                        className="Constitution"
                        onChange={updateCon}
                      />
                    </div>
                  </div>
                  <div className="Constitution-Mod">
                    <h5>Constitution Mod: {conMod}</h5>
                  </div>
                  <div className="Race-Class-Other">
                    <h5>Race/Class/Other Intelligence Bonus:</h5>
                    <div className="Race-Class-Other-Parent">
                      <input
                        name="intBonus"
                        type="number"
                        defaultValue="0"
                        className="Intelligence-Bonus"
                        onChange={e => setIntBonus(parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="Intelligence-Stat">
                    <h5>Intelligence:</h5>
                    <div className="Intelligence-Parent">
                      <input
                        name="intelligence"
                        type="number"
                        className="Intelligence"
                        onChange={updateInt}
                      />
                    </div>
                  </div>
                  <div className="Intelligence-Mod">
                    <h5>Intelligence Mod: {intMod}</h5>
                  </div>
                  <div className="Race-Class-Other">
                    <h5>Race/Class/Other Wisdom Bonus:</h5>
                    <div className="Race-Class-Other-Parent">
                      <input
                        name="wisBonus"
                        type="number"
                        defaultValue="0"
                        className="Wisdom-Bonus"
                        onChange={e => setWisBonus(parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="Wisdom-Stat">
                    <h5>Wisdom:</h5>
                    <div className="Wisdom-Parent">
                      <input
                        name="wisdom"
                        type="number"
                        className="Wisdom"
                        onChange={updateWis}
                      />
                    </div>
                  </div>
                  <div className="Wisdom-Mod">
                    <h5>Wisdom Mod: {wisMod}</h5>
                  </div>
                  <div className="Race-Class-Other">
                    <h5>Race/Class/Other Charisma Bonus:</h5>
                    <div className="Race-Class-Other-Parent">
                      <input
                        name="chaBonus"
                        type="number"
                        defaultValue="0"
                        className="Charisma-Bonus"
                        onChange={e => setChaBonus(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="Charisma-Stat">
                    <h5>Charisma:</h5>
                    <div className="Charisma-Parent">
                      <input
                        name="charisma"
                        type="number"
                        className="Charisma"
                        onChange={updateCha}
                      />
                    </div>
                  </div>
                  <div className="Charisma-Mod">
                    <h5>Charisma Mod: {chaMod}</h5>
                  </div>
                </>
              ) : (
                <>
                  <div className="Roll-Stat-Button-Div">
                    <button
                      id="btnRoll"
                      className="Roll-Stat-Button"
                      type="button"
                      onClick={rollStats}
                    >
                      Roll Stats
                    </button>
                  </div>
                  <ul className="Display-Rolled">
                    {droppedLowest.map(roll => (
                      <li>{roll}</li>
                    ))}
                  </ul>
                </>
              )}
              <h5>
                Proficiency Bonus:
                <input
                  name="proficiencyBonus"
                  type="number"
                  onChange={e => setProficiencyBonus(parseInt(e.target.value))}
                />
              </h5>
              <h5>
                Inspiration?
                <input
                  className="Inspiration"
                  name="inspiration"
                  type="radio"
                  checked={inspiration === true}
                  onChange={e => setInspiration(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Inspiration"
                  name="inspiration"
                  type="radio"
                  checked={inspiration === false}
                  onChange={e => setInspiration(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Base Armor Class: {baseAC}</h5>
              <h5>Initiative Bonus: {initiativeBonus}</h5>
              <h5>
                Base Speed:
                <select
                  className="Stat-BaseSpeed"
                  name="baseSpeed"
                  type="text"
                  onChange={e => setBaseSpeed(parseInt(e.target.value))}
                >
                  <option value={null}>{''}</option>
                  <option value="30">Dragonborn (30ft)</option>
                  <option value="25">Dwarf (25ft)</option>
                  <option value="30">Elf (30ft)</option>
                  <option value="25">Gnome (25ft)</option>
                  <option value="20">Half-Elf (30ft)</option>
                  <option value="25">Halfling (25ft)</option>
                  <option value="30">Half-Orc (30ft)</option>
                  <option value="30">Human (30ft)</option>
                  <option value="30">Tiefling (30ft)</option>
                </select>
              </h5>
              <h5>
                Hit Die:
                <select
                  className="Stat-Hit-Die"
                  name="hitDie"
                  type="text"
                  onChange={setHitDie}
                >
                  <option value={null}>{''}</option>
                  <option value="d12">Barbarian (d12)</option>
                  <option value="d8">Bard (d8)</option>
                  <option value="d8">Cleric (d8)</option>
                  <option value="d8">Druid (d8)</option>
                  <option value="d10">Fighter (d10)</option>
                  <option value="d8">Monk (d8)</option>
                  <option value="d10">Paladin (d10)</option>
                  <option value="d10">Ranger (d10)</option>
                  <option value="d8">Rogue (d8)</option>
                  <option value="d6">Sorcerer (d6)</option>
                  <option value="d8">Warlock (d8)</option>
                  <option value="d6">Wizard (d6)</option>
                </select>
              </h5>
              <h5>
                Total Hit Dice:
                <input
                  name="totalHitDie"
                  type="number"
                  onChange={e => setTotalHitDie(parseInt(e.target.value))}
                />
              </h5>
              <h5>
                Current Hit Dice:
                <input
                  name="currentHitDie"
                  type="number"
                  onChange={e => setCurrentHitDie(parseInt(e.target.value))}
                />
              </h5>
              <div className="Race-Class-Other">
                <h5>Race/Class/Other Hit Point Bonus:</h5>
                <div className="Race-Class-Other-Parent">
                  <input
                    name="hitPointBonus"
                    type="number"
                    defaultValue="0"
                    className="Hit-Point-Bonus"
                    onChange={e => setHitPointBonus(e.target.value)}
                  />
                </div>
              </div>
              <h5>
                Max Hit Points:
                <input name="maxHP" type="number" onChange={updateMaxHP} />
              </h5>
              <h5>
                Current Hit Points:
                <input
                  name="currentHP"
                  type="number"
                  onChange={e => setCurrentHP(parseInt(e.target.value))}
                />
              </h5>
              <h5>
                Temporary Hit Points:
                <input
                  name="tempHP"
                  type="number"
                  onChange={e => setTempHP(parseInt(e.target.value))}
                />
              </h5>
              <h5>
                Strength Saving Throw Proficiency? <br></br>
                <input
                  className="Str-Saving-Throw-Prof"
                  name="strSavingThrowProf"
                  type="radio"
                  checked={strSavingThrowProf === true}
                  onChange={
                    (e => setStrSavingThrowProf(true), updateStrSavingThrow)
                  }
                />{' '}
                Yes{' '}
                <input
                  className="Str-Saving-Throw-Prof"
                  name="strSavingThrowProf"
                  type="radio"
                  checked={strSavingThrowProf === false}
                  onChange={
                    (e => setStrSavingThrowProf(false), updateStrSavingThrow)
                  }
                />{' '}
                No{' '}
              </h5>
              <h5>Strength Saving Throw: {strSavingThrow}</h5>
              <h5>
                Dexterity Saving Throw Proficiency? <br></br>
                <input
                  className="Dex-Saving-Throw-Prof"
                  name="dexSavingThrowProf"
                  type="radio"
                  value="Yes"
                  checked={dexSavingThrowProf === true ? 'checked' : ''}
                  onChange={e => setDexSavingThrowProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Dex-Saving-Throw-Prof"
                  name="dexSavingThrowProf"
                  type="radio"
                  value="No"
                  checked={dexSavingThrowProf === false ? 'checked' : ''}
                  onChange={e => setDexSavingThrowProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Dexterity Saving Throw: {dexSavingThrow}</h5>
              <h5>
                Constitution Saving Throw Proficiency? <br></br>
                <input
                  className="Con-Saving-Throw-Prof"
                  name="conSavingThrowProf"
                  type="radio"
                  checked={conSavingThrowProf === true}
                  onChange={
                    (e => setConSavingThrowProf(true), updateConSavingThrow)
                  }
                />{' '}
                Yes{' '}
                <input
                  className="Con-Saving-Throw-Prof"
                  name="conSavingThrowProf"
                  type="radio"
                  checked={conSavingThrowProf === false}
                  onChange={
                    (e => setConSavingThrowProf(false), updateConSavingThrow)
                  }
                />{' '}
                No{' '}
              </h5>
              <h5>Constitution Saving Throw: {conSavingThrow}</h5>
              <h5>
                Intelligence Saving Throw Proficiency? <br></br>
                <input
                  className="Int-Saving-Throw-Prof"
                  name="intSavingThrowProf"
                  type="radio"
                  checked={intSavingThrowProf === true}
                  onChange={
                    (e => setIntSavingThrowProf(true), updateIntSavingThrow)
                  }
                />{' '}
                Yes{' '}
                <input
                  className="Int-Saving-Throw-Prof"
                  name="intSavingThrowProf"
                  type="radio"
                  checked={intSavingThrowProf === false}
                  onChange={
                    (e => setIntSavingThrowProf(false), updateIntSavingThrow)
                  }
                />{' '}
                No{' '}
              </h5>
              <h5>Intelligence Saving Throw: {intSavingThrow}</h5>
              <h5>
                Wisdom Saving Throw Proficiency? <br></br>
                <input
                  className="Wis-Saving-Throw-Prof"
                  name="wisSavingThrowProf"
                  type="radio"
                  checked={wisSavingThrowProf === true}
                  onChange={
                    (e => setWisSavingThrowProf(true), updateWisSavingThrow)
                  }
                />{' '}
                Yes{' '}
                <input
                  className="Wis-Saving-Throw-Prof"
                  name="wisSavingThrowProf"
                  type="radio"
                  checked={wisSavingThrowProf === false}
                  onChange={
                    (e => setWisSavingThrowProf(false), updateWisSavingThrow)
                  }
                />{' '}
                No{' '}
              </h5>
              <h5>Wisdom Saving Throw: {wisSavingThrow}</h5>
              <h5>
                Charisma Saving Throw Proficiency? <br></br>
                <input
                  className="Cha-Saving-Throw-Prof"
                  name="chaSavingThrowProf"
                  type="radio"
                  checked={chaSavingThrowProf === true}
                  onChange={
                    (e => setChaSavingThrowProf(true), updateChaSavingThrow)
                  }
                />{' '}
                Yes{' '}
                <input
                  className="Cha-Saving-Throw-Prof"
                  name="chaSavingThrowProf"
                  type="radio"
                  checked={chaSavingThrowProf === false}
                  onChange={
                    (e => setChaSavingThrowProf(false), updateChaSavingThrow)
                  }
                />{' '}
                No{' '}
              </h5>
              <h5>Charisma Saving Throw: {chaSavingThrow}</h5>
              <div className="Create-Stat-Button-Div">
                <button className="Create-Stat-Button" onClick={createNewStat}>
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

export default CreateStat
