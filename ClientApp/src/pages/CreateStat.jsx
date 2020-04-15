import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const CreateStat = props => {
  const characterId = props.match.params.id
  const [entryType, setEntryType] = useState('manual')
  const [strMod, setStrMod] = useState()
  const [strength, setStrength] = useState()
  const [dexMod, setDexMod] = useState()
  const [dexterity, setDexterity] = useState()
  const [conMod, setConMod] = useState()
  const [constitution, setConstitution] = useState()
  const [intMod, setIntMod] = useState()
  const [intelligence, setIntelligence] = useState()
  const [wisMod, setWisMod] = useState()
  const [wisdom, setWisdom] = useState()
  const [chaMod, setChaMod] = useState()
  const [charisma, setCharisma] = useState()
  const [inspiration, setInspiration] = useState()
  const [armorClass, setArmorClass] = useState()
  const [initiativeBonus, setInitiativeBonus] = useState()
  const [baseSpeed, setBaseSpeed] = useState()
  const [totalHitDie, setTotalHitDie] = useState()
  const [currentHitDie, setCurrentHitDie] = useState()
  const [maxHP, setMaxHP] = useState()
  const [currentHP, setCurrentHP] = useState()
  const [tempHP, setTempHP] = useState()
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
    const score = parseInt(e.target.value)
    const mod = Math.floor((score + 10) / 2)
    setStrMod(mod)
    setStrength(score)
  }

  //function to update dex and dexmod state
  const updateDex = e => {
    const score = parseInt(e.target.value)
    const mod = Math.floor((score + 10) / 2)
    setDexMod(mod)
    setDexterity(score)
  }

  //function to update con and conmod state
  const updateCon = e => {
    const score = parseInt(e.target.value)
    const mod = Math.floor((score + 10) / 2)
    setConMod(mod)
    setConstitution(score)
  }

  //function to update int and intmod state
  const updateInt = e => {
    const score = parseInt(e.target.value)
    const mod = Math.floor((score + 10) / 2)
    setIntMod(mod)
    setIntelligence(score)
  }

  //function to update wis and wismod state
  const updateWis = e => {
    const score = parseInt(e.target.value)
    const mod = Math.floor((score + 10) / 2)
    setWisMod(mod)
    setWisdom(score)
  }

  //function to update cha and chamod state
  const updateCha = e => {
    const score = parseInt(e.target.value)
    const mod = Math.floor((score + 10) / 2)
    setChaMod(mod)
    setCharisma(score)
  }

  //function to update AC state
  const updateAC = e => {
    const score = parseInt(e.target.value)
    setArmorClass(score)
  }

  //function to update initiative state
  const updateInitiative = e => {
    const score = parseInt(e.target.value)
    setInitiativeBonus(score)
  }

  //function to update basespeed state
  const updateBaseSpeed = e => {
    const score = parseInt(e.target.value)
    setBaseSpeed(score)
  }

  //function to update totalHitDie state
  const updateTotalHitDie = e => {
    const score = parseInt(e.target.value)
    setTotalHitDie(score)
  }

  //function to update currentHitDie state
  const updateCurrentHitDie = e => {
    const score = parseInt(e.target.value)
    setCurrentHitDie(score)
  }

  //function to update maxHP state
  const updateMaxHP = e => {
    const score = parseInt(e.target.value)
    setMaxHP(score)
  }

  //function to update currentHP state
  const updateCurrentHP = e => {
    const score = parseInt(e.target.value)
    setCurrentHP(score)
  }

  //function to update tempHP state
  const updateTempHP = e => {
    const score = parseInt(e.target.value)
    setTempHP(score)
  }

  //create stat data from user inputs
  const updateStatData = e => {
    const key = e.target.name
    const value = e.target.value
    setStat(prevStat => {
      prevStat[key] = value
      return prevStat
    })
  }

  //axios post to save stats to character
  const createNewStat = async e => {
    stat.inspiration = inspiration
    stat.characterId = characterId
    e.preventDefault()
    const resp = await axios.post('api/stat/create', stat)
    if (resp.status === 200 || resp.status === 201) {
      // redirect page to the skill creation
      setShouldRedirect(true)
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
    return (
      <Redirect
        to={{
          pathname: `/CreateSkill/${characterId}`,
          state: { who: user },
        }}
      />
    )
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
                  <div className="Strength-Stat">
                    <h5>Strength:</h5>
                    <div className="Strength-Parent">
                      <input
                        name="strength"
                        type="text area"
                        className="Strength"
                        onChange={updateStr}
                      />
                    </div>
                  </div>
                  <div className="Strength-Mod">
                    <h5>Strength Mod: {strMod}</h5>
                  </div>
                  <div className="Dexterity-Stat">
                    <h5>Dexterity:</h5>
                    <div className="Dexterity-Parent">
                      <input
                        name="dexterity"
                        type="text area"
                        className="Dexterity"
                        onChange={updateDex}
                      />
                    </div>
                  </div>
                  <div className="Dexterity-Mod">
                    <h5>Dexterity Mod: {dexMod}</h5>
                  </div>
                  <div className="Constitution-Stat">
                    <h5>Constitution:</h5>
                    <div className="Constitution-Parent">
                      <input
                        name="constitution"
                        type="text area"
                        className="Constitution"
                        onChange={updateCon}
                      />
                    </div>
                  </div>
                  <div className="Constitution-Mod">
                    <h5>Constitution Mod: {conMod}</h5>
                  </div>
                  <div className="Intelligence-Stat">
                    <h5>Intelligence:</h5>
                    <div className="Intelligence-Parent">
                      <input
                        name="intelligence"
                        type="text area"
                        className="Intelligence"
                        onChange={updateInt}
                      />
                    </div>
                  </div>
                  <div className="Intelligence-Mod">
                    <h5>Intelligence Mod: {intMod}</h5>
                  </div>
                  <div className="Wisdom-Stat">
                    <h5>Wisdom:</h5>
                    <div className="Wisdom-Parent">
                      <input
                        name="wisdom"
                        type="text area"
                        className="Wisdom"
                        onChange={updateWis}
                      />
                    </div>
                  </div>
                  <div className="Wisdom-Mod">
                    <h5>Wisdom Mod: {wisMod}</h5>
                  </div>
                  <div className="Charisma-Stat">
                    <h5>Charisma:</h5>
                    <div className="Charisma-Parent">
                      <input
                        name="charisma"
                        type="text area"
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
                  onChange={updateProficiencyBonus}
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
              <h5>
                Armor Class:
                <input name="armorClass" type="number" onChange={updateAC} />
              </h5>
              <h5>
                Initiative Bonus:
                <input
                  name="initiativeBonus"
                  type="number"
                  onChange={updateInitiative}
                />
              </h5>
              <h5>
                Base Speed:
                <input
                  name="baseSpeed"
                  type="number"
                  onChange={updateBaseSpeed}
                />
              </h5>
              <h5>
                Hit Die:
                <input name="hitDie" type="text" onChange={updateStatData} />
              </h5>
              <h5>
                Total Hit Dice:
                <input
                  name="totalHitDie"
                  type="number"
                  onChange={updateTotalHitDie}
                />
              </h5>
              <h5>
                Current Hit Dice:
                <input
                  name="currentHitDie"
                  type="number"
                  onChange={updateCurrentHitDie}
                />
              </h5>
              <h5>
                Max Hit Points:
                <input name="maxHP" type="number" onChange={updateMaxHP} />
              </h5>
              <h5>
                Current Hit Points:
                <input
                  name="currentHP"
                  type="number"
                  onChange={updateCurrentHP}
                />
              </h5>
              <h5>
                Temporary Hit Points:
                <input name="tempHP" type="number" onChange={updateTempHP} />
              </h5>
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
