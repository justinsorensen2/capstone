import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const StatUpdate = props => {
  const characterId = parseInt(props.match.params.id)
  //create vars to hold stat and skill in state
  const [stat, setStat] = useState({})
  const [skill, setSkill] = useState({})

  //set vars for user inputs
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
  const [proficiencyBonus, setProficiencyBonus] = useState()
  const [inspiration, setInspiration] = useState()
  const [initiativeBonus, setInitiativeBonus] = useState()
  const [totalHitDie, setTotalHitDie] = useState()
  const [currentHitDie, setCurrentHitDie] = useState()
  const [maxHP, setMaxHP] = useState()
  const [currentHP, setCurrentHP] = useState()
  const [tempHP, setTempHP] = useState()
  const [baseAC, setBaseAC] = useState()
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
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [submitIsEnabled, setSubmitIsEnabled] = useState(false)

  // api call to pull in stats from db
  const getStatDetails = async characterId => {
    return await axios.get(`/api/stat/${characterId}`).then(response => {
      //set var for character from axios get
      setStat(response.data)
      setStrength(response.data.strength)
      setDexterity(response.data.dexterity)
      setConstitution(response.data.constitution)
      setIntelligence(response.data.intelligence)
      setWisdom(response.data.wisdom)
      setCharisma(response.data.charisma)
      setStrMod(response.data.strMod)
      setDexMod(response.data.dexMod)
      setConMod(response.data.conMod)
      setIntMod(response.data.intMod)
      setWisMod(response.data.wisMod)
      setChaMod(response.data.chaMod)
      setInspiration(response.data.inspiration)
      setInitiativeBonus(response.data.initiativeBonus)
      setTotalHitDie(response.data.totalHitDie)
      setCurrentHitDie(response.data.currentHitDie)
      setMaxHP(response.data.maxHP)
      setCurrentHP(response.data.currentHP)
      setTempHP(response.data.tempHP)
      setBaseAC(response.data.armorClass)
      setStrSavingThrow(response.data.strSavingThrow)
      setStrSavingThrowProf(response.data.strSavingThrowProf)
      setDexSavingThrow(response.data.dexSavingThrow)
      setDexSavingThrowProf(response.data.dexSavingThrowProf)
      setConSavingThrow(response.data.conSavingThrow)
      setConSavingThrowProf(response.data.conSavingThrowProf)
      setIntSavingThrow(response.data.intSavingThrow)
      setIntSavingThrowProf(response.data.intSavingThrowProf)
      setWisSavingThrow(response.data.wisSavingThrow)
      setWisSavingThrowProf(response.data.wisSavingThrowProf)
      setChaSavingThrow(response.data.chaSavingThrow)
      setChaSavingThrowProf(response.data.chaSavingThrowProf)
      setProficiencyBonus(response.data.proficiencyBonus)

      console.log('stat get' + response.data)
    })
  }

  //call useEffect to getStats when page loads
  useEffect(() => {
    getStatDetails(characterId)
  }, [])

  //function to update proficiencyBonus state
  const updateProficiencyBonus = e => {
    const score = parseInt(e.target.value)
    setProficiencyBonus(score)
  }

  //function to update str and strmod state
  const updateStr = e => {
    const score = parseInt(e.target.value)
    const mod = Math.floor((score - 10) / 2)
    setStrMod(mod)
    setStrength(score)
  }

  //function to update dex and dexmod state,
  //then set baseAC and AC
  //then set initiative bonus
  const updateDex = e => {
    const score = parseInt(e.target.value)
    const mod = Math.floor((score - 10) / 2)
    setDexMod(mod)
    setDexterity(score)
    setBaseAC(mod + 10)
    setInitiativeBonus(mod)
  }

  //function to update con and conmod state
  const updateCon = e => {
    const score = parseInt(e.target.value)
    const mod = Math.floor((score - 10) / 2)
    setConMod(mod)
    setConstitution(score)
  }

  //function to update int and intmod state
  const updateInt = e => {
    const score = parseInt(e.target.value)
    const mod = Math.floor((score - 10) / 2)
    setIntMod(mod)
    setIntelligence(score)
  }

  //function to update wis and wismod state
  const updateWis = e => {
    const score = parseInt(e.target.value)
    const mod = Math.floor((score - 10) / 2)
    setWisMod(mod)
    setWisdom(score)
  }

  //function to update cha and chamod state
  const updateCha = e => {
    const score = parseInt(e.target.value)
    const mod = Math.floor((score - 10) / 2)
    setChaMod(mod)
    setCharisma(score)
  }

  //call useEffect to update str saving throw
  //whenever profbon, Mod, or savingthrowprof are updated
  useEffect(() => {
    if (strSavingThrowProf) {
      setStrSavingThrow(strMod + proficiencyBonus)
    } else {
      setStrSavingThrow(strMod)
    }
  }, [strSavingThrowProf, strMod, proficiencyBonus])

  //call useEffect to update dex saving throw
  //whenever profbon, Mod, or savingthrowprof are updated
  useEffect(() => {
    if (dexSavingThrowProf) {
      setDexSavingThrow(dexMod + proficiencyBonus)
    } else {
      setDexSavingThrow(dexMod)
    }
  }, [dexSavingThrowProf, dexMod, proficiencyBonus])

  //call useEffect to update con saving throw
  //whenever profbon, Mod, or savingthrowprof are updated
  useEffect(() => {
    if (conSavingThrowProf) {
      setConSavingThrow(conMod + proficiencyBonus)
    } else {
      setConSavingThrow(conMod)
    }
  }, [conSavingThrowProf, conMod, proficiencyBonus])

  //call useEffect to update int saving throw
  //whenever profbon, Mod, or savingthrowprof are updated
  useEffect(() => {
    if (intSavingThrowProf) {
      setIntSavingThrow(intMod + proficiencyBonus)
    } else {
      setIntSavingThrow(intMod)
    }
  }, [intSavingThrowProf, intMod, proficiencyBonus])

  //call useEffect to update wis saving throw
  //whenever profbon, Mod, or savingthrowprof are updated
  useEffect(() => {
    if (wisSavingThrowProf) {
      setWisSavingThrow(wisMod + proficiencyBonus)
    } else {
      setWisSavingThrow(wisMod)
    }
  }, [wisSavingThrowProf, wisMod, proficiencyBonus])

  //call useEffect to update cha saving throw
  //whenever profbon, Mod, or savingthrowprof are updated
  useEffect(() => {
    if (chaSavingThrowProf) {
      setChaSavingThrow(chaMod + proficiencyBonus)
    } else {
      setChaSavingThrow(chaMod)
    }
  }, [chaSavingThrowProf, chaMod, proficiencyBonus])

  //axios put to save stats to database
  const putStat = async e => {
    const statToUpdateOnServer = {
      inspiration: inspiration,
      proficiencyBonus: proficiencyBonus,
      baseSpeed: stat.baseSpeed,
      hitDie: stat.hitDie,
      totalHitDie: totalHitDie,
      currentHitDie: currentHitDie,
      currentHP: currentHP,
      tempHP: tempHP,
      chaSavingThrowProf: chaSavingThrowProf,
      chaSavingThrow: chaSavingThrow,
      wisSavingThrowProf: wisSavingThrowProf,
      wisSavingThrow: wisSavingThrow,
      intSavingThrowProf: intSavingThrowProf,
      intSavingThrow: intSavingThrow,
      conSavingThrowProf: conSavingThrowProf,
      conSavingThrow: conSavingThrow,
      dexSavingThrowProf: dexSavingThrowProf,
      dexSavingThrow: dexSavingThrow,
      strSavingThrowProf: strSavingThrowProf,
      strSavingThrow: strSavingThrow,
      maxHP: maxHP,
      charisma: charisma,
      chaMod: chaMod,
      wisdom: wisdom,
      wisMod: wisMod,
      intelligence: intelligence,
      intMod: intMod,
      constitution: constitution,
      conMod: conMod,
      dexterity: dexterity,
      dexMod: dexMod,
      strength: strength,
      strMod: strMod,
      armorClass: baseAC,
      initiativeBonus: initiativeBonus,
      characterId: characterId,
      id: stat.id,
    }
    e.preventDefault()
    const resp = await axios.put('/api/Stat/put', statToUpdateOnServer)
    if (resp.status === 200 || resp.status === 201) {
      // redirect page to char details
      setShouldRedirect(true)
      console.log(resp.data)
    } else {
      //display an error message
      throw new MessageEvent()
    }
  }
  //redirect after put
  if (shouldRedirect) {
    return <Redirect to={`/CharacterDetails/${characterId}`} />
  }
  //render
  return (
    <div>
      <article className="Create-Stat-Flex">
        <section className="Create-Stat-Parent">
          <div className="Create-Stat">
            <form className="Create-Stat-Form" onSubmit={putStat}>
              <div className="Site-Icon" />
              <h3>Update Statistics:</h3>
              <div className="Strength-Stat">
                <h5>Strength:</h5>
                <div className="Strength-Parent">
                  <input
                    name="strength"
                    type="number"
                    defaultValue={strength}
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
                    type="number"
                    defaultValue={dexterity}
                    className="Dexterity"
                    onBlur={updateDex}
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
                    type="number"
                    defaultValue={constitution}
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
                    type="number"
                    defaultValue={intelligence}
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
                    type="number"
                    defaultValue={wisdom}
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
                    type="number"
                    defaultValue={charisma}
                    className="Charisma"
                    onChange={updateCha}
                  />
                </div>
              </div>
              <div className="Charisma-Mod">
                <h5>Charisma Mod: {chaMod}</h5>
              </div>
              <h5>
                Proficiency Bonus:
                <input
                  name="proficiencyBonus"
                  type="number"
                  defaultValue={proficiencyBonus}
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
              <h5>Hit Die: {stat.hitDie}</h5>
              <h5>
                Total Hit Dice:
                <input
                  name="totalHitDie"
                  type="number"
                  defaultValue={totalHitDie}
                  onChange={e => setTotalHitDie(parseInt(e.target.value))}
                />
              </h5>
              <h5>
                Current Hit Dice:
                <input
                  name="currentHitDie"
                  type="number"
                  defaultValue={currentHitDie}
                  onChange={e => setCurrentHitDie(parseInt(e.target.value))}
                />
              </h5>
              <h5>
                Max Hit Points:
                <input
                  name="maxHP"
                  type="number"
                  defaultValue={maxHP}
                  onChange={e => setMaxHP(parseInt(e.target.value))}
                />
              </h5>
              <h5>
                Current Hit Points:
                <input
                  name="currentHP"
                  type="number"
                  defaultValue={currentHP}
                  onChange={e => setCurrentHP(parseInt(e.target.value))}
                />
              </h5>
              <h5>
                Temporary Hit Points:
                <input
                  name="tempHP"
                  type="number"
                  defaultValue={tempHP}
                  onChange={e => setTempHP(parseInt(e.target.value))}
                />
              </h5>
              <h5>
                Strength Saving Throw Proficiency? <br></br>
                <input
                  className="Str-Saving-Throw-Prof"
                  name="strSavingThrowProf"
                  type="radio"
                  checked={strSavingThrowProf === true ? 'checked' : ''}
                  onChange={e => setStrSavingThrowProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Str-Saving-Throw-Prof"
                  name="strSavingThrowProf"
                  type="radio"
                  checked={strSavingThrowProf === false ? 'checked' : ''}
                  onChange={e => setStrSavingThrowProf(false)}
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
                  checked={conSavingThrowProf === true ? 'checked' : ''}
                  onChange={e => setConSavingThrowProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Con-Saving-Throw-Prof"
                  name="conSavingThrowProf"
                  type="radio"
                  checked={conSavingThrowProf === false ? 'checked' : ''}
                  onChange={e => setConSavingThrowProf(false)}
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
                  checked={intSavingThrowProf === true ? 'checked' : ''}
                  onChange={e => setIntSavingThrowProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Int-Saving-Throw-Prof"
                  name="intSavingThrowProf"
                  type="radio"
                  checked={intSavingThrowProf === false ? 'checked' : ''}
                  onChange={e => setIntSavingThrowProf(false)}
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
                  checked={wisSavingThrowProf === true ? 'checked' : ''}
                  onChange={e => setWisSavingThrowProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Wis-Saving-Throw-Prof"
                  name="wisSavingThrowProf"
                  type="radio"
                  checked={wisSavingThrowProf === false ? 'checked' : ''}
                  onChange={e => setWisSavingThrowProf(false)}
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
                  checked={chaSavingThrowProf === true ? 'checked' : ''}
                  onChange={e => setChaSavingThrowProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Cha-Saving-Throw-Prof"
                  name="chaSavingThrowProf"
                  type="radio"
                  checked={chaSavingThrowProf === false ? 'checked' : ''}
                  onChange={e => setChaSavingThrowProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Charisma Saving Throw: {chaSavingThrow}</h5>
              <div className="Create-Stat-Button-Div">
                <button className="Create-Stat-Button" onClick={putStat}>
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

export default StatUpdate
