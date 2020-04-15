import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const CreateStat = props => {
  const user = props
  const character = localStorage.getItem('characterPart1')
  const [entryType, setEntryType] = useState('manual')
  const [strMod, setStrMod] = useState()
  const [dexMod, setDexMod] = useState()
  const [conMod, setConMod] = useState()
  const [intMod, setIntMod] = useState()
  const [wisMod, setWisMod] = useState()
  const [chaMod, setChaMod] = useState()
  const [inspiration, setInspiration] = useState()
  const [stat, setStat] = useState()
  const [shouldRedirect, setShouldRedirect] = useState(false)
  let rolled = new Array()
  let droppedLowest = new Array()

  const updateStrMod = e => {
    const score = e.target.value
    if (score === 1) {
      setStrMod(-5)
    } else if (score === 2 || score === 3) {
      setStrMod(-4)
    } else if (score === 4 || score === 5) {
      setStrMod(-3)
    } else if (score === 6 || score === 7) {
      setStrMod(-2)
    } else if (score === 8 || score === 9) {
      setStrMod(-1)
    } else if (score === 10 || score === 11) {
      setStrMod(0)
    } else if (score === 12 || score === 13) {
      setStrMod(1)
    } else if (score === 14 || score === 15) {
      setStrMod(2)
    } else if (score === 16 || score === 17) {
      setStrMod(3)
    } else if (score === 18 || score === 19) {
      setStrMod(4)
    } else if (score === 20 || score === 21) {
      setStrMod(5)
    } else if (score === 22 || score === 23) {
      setStrMod(6)
    } else if (score === 24 || score === 25) {
      setStrMod(7)
    } else if (score === 26 || score === 27) {
      setStrMod(8)
    } else if (score === 28 || score === 29) {
      setStrMod(9)
    } else if (score === 30) {
      setStrMod(10)
    }
  }

  const updateDexMod = e => {
    const score = e.target.value
    if (score === 1) {
      setDexMod(-5)
    } else if (score === 2 || score === 3) {
      setDexMod(-4)
    } else if (score === 4 || score === 5) {
      setDexMod(-3)
    } else if (score === 6 || score === 7) {
      setDexMod(-2)
    } else if (score === 8 || score === 9) {
      setDexMod(-1)
    } else if (score === 10 || score === 11) {
      setDexMod(0)
    } else if (score === 12 || score === 13) {
      setDexMod(1)
    } else if (score === 14 || score === 15) {
      setDexMod(2)
    } else if (score === 16 || score === 17) {
      setDexMod(3)
    } else if (score === 18 || score === 19) {
      setDexMod(4)
    } else if (score === 20 || score === 21) {
      setDexMod(5)
    } else if (score === 22 || score === 23) {
      setDexMod(6)
    } else if (score === 24 || score === 25) {
      setDexMod(7)
    } else if (score === 26 || score === 27) {
      setDexMod(8)
    } else if (score === 28 || score === 29) {
      setDexMod(9)
    } else if (score === 30) {
      setDexMod(10)
    }
  }

  const updateConMod = e => {
    const score = e.target.value
    if (score === 1) {
      setConMod(-5)
    } else if (score === 2 || score === 3) {
      setConMod(-4)
    } else if (score === 4 || score === 5) {
      setConMod(-3)
    } else if (score === 6 || score === 7) {
      setConMod(-2)
    } else if (score === 8 || score === 9) {
      setConMod(-1)
    } else if (score === 10 || score === 11) {
      setConMod(0)
    } else if (score === 12 || score === 13) {
      setConMod(1)
    } else if (score === 14 || score === 15) {
      setConMod(2)
    } else if (score === 16 || score === 17) {
      setConMod(3)
    } else if (score === 18 || score === 19) {
      setConMod(4)
    } else if (score === 20 || score === 21) {
      setConMod(5)
    } else if (score === 22 || score === 23) {
      setConMod(6)
    } else if (score === 24 || score === 25) {
      setConMod(7)
    } else if (score === 26 || score === 27) {
      setConMod(8)
    } else if (score === 28 || score === 29) {
      setConMod(9)
    } else if (score === 30) {
      setConMod(10)
    }
  }

  const updateIntMod = e => {
    const score = e.target.value
    if (score === 1) {
      setIntMod(-5)
    } else if (score === 2 || score === 3) {
      setIntMod(-4)
    } else if (score === 4 || score === 5) {
      setIntMod(-3)
    } else if (score === 6 || score === 7) {
      setIntMod(-2)
    } else if (score === 8 || score === 9) {
      setIntMod(-1)
    } else if (score === 10 || score === 11) {
      setIntMod(0)
    } else if (score === 12 || score === 13) {
      setIntMod(1)
    } else if (score === 14 || score === 15) {
      setIntMod(2)
    } else if (score === 16 || score === 17) {
      setIntMod(3)
    } else if (score === 18 || score === 19) {
      setIntMod(4)
    } else if (score === 20 || score === 21) {
      setIntMod(5)
    } else if (score === 22 || score === 23) {
      setIntMod(6)
    } else if (score === 24 || score === 25) {
      setIntMod(7)
    } else if (score === 26 || score === 27) {
      setIntMod(8)
    } else if (score === 28 || score === 29) {
      setIntMod(9)
    } else if (score === 30) {
      setIntMod(10)
    }
  }

  const updateWisMod = e => {
    const score = e.target.value
    if (score === 1) {
      setWisMod(-5)
    } else if (score === 2 || score === 3) {
      setWisMod(-4)
    } else if (score === 4 || score === 5) {
      setWisMod(-3)
    } else if (score === 6 || score === 7) {
      setWisMod(-2)
    } else if (score === 8 || score === 9) {
      setWisMod(-1)
    } else if (score === 10 || score === 11) {
      setWisMod(0)
    } else if (score === 12 || score === 13) {
      setWisMod(1)
    } else if (score === 14 || score === 15) {
      setWisMod(2)
    } else if (score === 16 || score === 17) {
      setWisMod(3)
    } else if (score === 18 || score === 19) {
      setWisMod(4)
    } else if (score === 20 || score === 21) {
      setWisMod(5)
    } else if (score === 22 || score === 23) {
      setWisMod(6)
    } else if (score === 24 || score === 25) {
      setWisMod(7)
    } else if (score === 26 || score === 27) {
      setWisMod(8)
    } else if (score === 28 || score === 29) {
      setWisMod(9)
    } else if (score === 30) {
      setWisMod(10)
    }
  }

  const updateChaMod = e => {
    const score = e.target.value
    if (score === 1) {
      setChaMod(-5)
    } else if (score === 2 || score === 3) {
      setChaMod(-4)
    } else if (score === 4 || score === 5) {
      setChaMod(-3)
    } else if (score === 6 || score === 7) {
      setChaMod(-2)
    } else if (score === 8 || score === 9) {
      setChaMod(-1)
    } else if (score === 10 || score === 11) {
      setChaMod(0)
    } else if (score === 12 || score === 13) {
      setChaMod(1)
    } else if (score === 14 || score === 15) {
      setChaMod(2)
    } else if (score === 16 || score === 17) {
      setChaMod(3)
    } else if (score === 18 || score === 19) {
      setChaMod(4)
    } else if (score === 20 || score === 21) {
      setChaMod(5)
    } else if (score === 22 || score === 23) {
      setChaMod(6)
    } else if (score === 24 || score === 25) {
      setChaMod(7)
    } else if (score === 26 || score === 27) {
      setChaMod(8)
    } else if (score === 28 || score === 29) {
      setChaMod(9)
    } else if (score === 30) {
      setChaMod(10)
    }
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
    stat.characterId = character.id
    e.preventDefault()
    const resp = await axios.post(
      'api/stat/create',
      {
        stat,
      },
      {
        character,
      }
    )
    if (resp.status === 200) {
      // redirect page to the home
      localStorage.setItem('characterPart2', resp.data)
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
    var min = Math.min(rolled)
    droppedLowest = rolled.filter(e => e !== min)
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
                        onChange={e => updateStrMod(e.target.value)}
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
                        onChange={e => updateDexMod(e.target.value)}
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
                        onChange={e => updateConMod(e.target.value)}
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
                        onChange={e => updateIntMod(e.target.value)}
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
                        onChange={e => updateWisMod(e.target.value)}
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
                        onChange={e => updateChaMod(e.target.value)}
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
                    <button className="Roll-Stat-Button" onClick={rollStats}>
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
                  onChange={updateStatData}
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
                <input
                  name="armorClass"
                  type="number"
                  onChange={updateStatData}
                />
              </h5>
              <h5>
                Initiative Bonus:
                <input
                  name="initiativeBonus"
                  type="number"
                  onChange={updateStatData}
                />
              </h5>
              <h5>
                Base Speed:
                <input
                  name="baseSpeed"
                  type="number"
                  onChange={updateStatData}
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
                  onChange={updateStatData}
                />
              </h5>
              <h5>
                Current Hit Dice:
                <input
                  name="currentHitDie"
                  type="number"
                  onChange={updateStatData}
                />
              </h5>
              <h5>
                Max Hit Points:
                <input name="maxHP" type="number" onChange={updateStatData} />
              </h5>
              <h5>
                Current Hit Points:
                <input
                  name="currentHP"
                  type="number"
                  onChange={updateStatData}
                />
              </h5>
              <h5>
                Temporary Hit Points:
                <input name="tempHP" type="number" onChange={updateStatData} />
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
