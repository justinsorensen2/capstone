import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const SkillUpdate = props => {
  const characterId = parseInt(props.match.params.id)
  //set all vars for use of state
  const [skill, setSkill] = useState()
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [stat, setStat] = useState({})
  const [skillId, setSkillId] = useState()
  const [strMod, setStrMod] = useState()
  const [dexMod, setDexMod] = useState()
  const [conMod, setConMod] = useState()
  const [intMod, setIntMod] = useState()
  const [wisMod, setWisMod] = useState()
  const [chaMod, setChaMod] = useState()
  const [proficiencyBonus, setProficiencyBonus] = useState()
  const [acrobaticsProf, setAcrobaticsProf] = useState()
  const [acrobatics, setAcrobatics] = useState()
  const [animalHandlingProf, setAnimalHandlingProf] = useState()
  const [animalHandling, setAnimalHandling] = useState()
  const [arcanaProf, setArcanaProf] = useState()
  const [arcana, setArcana] = useState()
  const [athleticsProf, setAthleticsProf] = useState()
  const [athletics, setAthletics] = useState()
  const [deceptionProf, setDeceptionProf] = useState()
  const [deception, setDeception] = useState()
  const [historyProf, setHistoryProf] = useState()
  const [history, setHistory] = useState()
  const [insightProf, setInsightProf] = useState()
  const [insight, setInsight] = useState()
  const [intimidationProf, setIntimidationProf] = useState()
  const [intimidation, setIntimidation] = useState()
  const [investigationProf, setInvestigationProf] = useState()
  const [investigation, setInvestigation] = useState()
  const [medicineProf, setMedicineProf] = useState()
  const [medicine, setMedicine] = useState()
  const [natureProf, setNatureProf] = useState()
  const [nature, setNature] = useState()
  const [perceptionProf, setPerceptionProf] = useState()
  const [perception, setPerception] = useState()
  const [performanceProf, setPerformanceProf] = useState()
  const [performance, setPerformance] = useState()
  const [persuasionProf, setPersuasionProf] = useState()
  const [persuasion, setPersuasion] = useState()
  const [religionProf, setReligionProf] = useState()
  const [religion, setReligion] = useState()
  const [sleightOfHandProf, setSleightOfHandProf] = useState()
  const [sleightOfHand, setSleightOfHand] = useState()
  const [stealthProf, setStealthProf] = useState()
  const [stealth, setStealth] = useState()
  const [survivalProf, setSurvivalProf] = useState()
  const [survival, setSurvival] = useState()
  const [passivePerception, setPassivePerception] = useState()

  // axios get for stat details
  const getStatDetails = async characterId => {
    return await axios.get(`/api/stat/${characterId}`).then(response => {
      //set var for character from axios get
      setStat(response.data)
      setStrMod(parseInt(response.data.strMod))
      setDexMod(parseInt(response.data.dexMod))
      setConMod(parseInt(response.data.conMod))
      setIntMod(parseInt(response.data.intMod))
      setWisMod(parseInt(response.data.wisMod))
      setChaMod(parseInt(response.data.chaMod))
      setProficiencyBonus(parseInt(response.data.proficiencyBonus))
      setSkillId(parseInt(response.data.id))
    })
  }
  console.log(proficiencyBonus)
  // axios get for skill details
  const getSkillDetails = async characterId => {
    return await axios.get(`/api/skill/${characterId}`).then(response => {
      //set var for character from axios get
      setSkill(response.data)
      setAcrobaticsProf(response.data.acrobaticsProf)
      setAcrobatics(parseInt(response.data.acrobatics))
      setAnimalHandlingProf(response.data.animalHandlingProf)
      setAnimalHandling(parseInt(response.data.animalHandling))
      setArcanaProf(response.data.arcanaProf)
      setArcana(parseInt(response.data.arcana))
      setAthleticsProf(response.data.athleticsProf)
      setAthletics(parseInt(response.data.athletics))
      setDeceptionProf(response.data.deceptionProf)
      setDeception(parseInt(response.data.deception))
      setHistoryProf(response.data.historyProf)
      setHistory(parseInt(response.data.history))
      setInsightProf(response.data.insightProf)
      setInsight(parseInt(response.data.insight))
      setIntimidationProf(response.data.intimidationProf)
      setIntimidation(parseInt(response.data.intimidation))
      setInvestigationProf(response.data.investigationProf)
      setInvestigation(parseInt(response.data.investigation))
      setMedicineProf(response.data.medicineProf)
      console.log({
        where: 'first',
        value: response.data.medicine,
        responseData: response.data,
      })
      setMedicine(parseInt(response.data.medicine))
      setNatureProf(response.data.natureProf)
      setNature(parseInt(response.data.nature))
      setPerceptionProf(response.data.perceptionProf)
      setPerception(parseInt(response.data.perception))
      setPerformanceProf(response.data.performanceProf)
      setPerformance(parseInt(response.data.performance))
      setPersuasionProf(response.data.persuasionProf)
      setPersuasion(parseInt(response.data.persuasion))
      setReligionProf(response.data.religionProf)
      setReligion(parseInt(response.data.religion))
      setSleightOfHandProf(response.data.sleightOfHandProf)
      setSleightOfHand(parseInt(response.data.sleightOfHand))
      setStealthProf(response.data.stealthProf)
      setStealth(parseInt(response.data.stealth))
      setSurvivalProf(response.data.survivalProf)
      setSurvival(parseInt(response.data.survival))
      setPassivePerception(parseInt(response.data.passivePerception))
      console.log('Skill get' + response.data.athletics)
    })
  }
  console.log(athletics)
  console.log(perception)
  //useEffect to call axios get when page loads
  useEffect(() => {
    getStatDetails(characterId)
    getSkillDetails(characterId)
  }, [])

  //call useEffect to update acrobatics
  //whenever acrobaticsProf is updated
  useEffect(() => {
    if (acrobaticsProf) {
      setAcrobatics(dexMod + proficiencyBonus)
    } else {
      setAcrobatics(dexMod)
    }
  }, [acrobaticsProf, dexMod])

  //call useEffect to update animalHandling
  //whenever animalHandlingProf is updated
  useEffect(() => {
    if (animalHandlingProf) {
      setAnimalHandling(wisMod + proficiencyBonus)
    } else {
      setAnimalHandling(wisMod)
    }
  }, [animalHandlingProf, wisMod])

  //call useEffect to update arcana
  //whenever arcanaProf is updated
  useEffect(() => {
    if (arcanaProf) {
      setArcana(intMod + proficiencyBonus)
    } else {
      setArcana(intMod)
    }
  }, [arcanaProf, intMod])

  //call useEffect to update athletics
  //whenever athleticsProf is updated
  useEffect(() => {
    if (athleticsProf) {
      setAthletics(strMod + proficiencyBonus)
    } else {
      setAthletics(strMod)
    }
  }, [athleticsProf, strMod])

  //call useEffect to update deception
  //whenever deceptionProf is updated
  useEffect(() => {
    if (deceptionProf) {
      setDeception(chaMod + proficiencyBonus)
    } else {
      setDeception(chaMod)
    }
  }, [deceptionProf, chaMod])

  //call useEffect to update history
  //whenever historyProf is updated
  useEffect(() => {
    if (historyProf) {
      setHistory(intMod + proficiencyBonus)
    } else {
      setHistory(intMod)
    }
  }, [historyProf, intMod])

  //call useEffect to update insight
  //whenever insightProf is updated
  useEffect(() => {
    if (insightProf) {
      setInsight(wisMod + proficiencyBonus)
    } else {
      setInsight(wisMod)
    }
  }, [insightProf, wisMod])

  //call useEffect to update intimidation
  //whenever intimidationProf is updated
  useEffect(() => {
    if (intimidationProf) {
      setIntimidation(chaMod + proficiencyBonus)
    } else {
      setIntimidation(chaMod)
    }
  }, [intimidationProf, chaMod])

  //call useEffect to update investigation
  //whenever investigationProf is updated
  useEffect(() => {
    if (investigationProf) {
      setInvestigation(intMod + proficiencyBonus)
    } else {
      setInvestigation(intMod)
    }
  }, [investigationProf, intMod])

  //call useEffect to update medicine
  //whenever medicineProf is updated
  useEffect(() => {
    if (medicineProf) {
      console.log({ where: 'second', value1: wisMod, value2: proficiencyBonus })
      setMedicine(wisMod + proficiencyBonus)
    } else {
      console.log({ where: 'third', value1: wisMod })
      setMedicine(wisMod)
    }
  }, [medicineProf, wisMod])

  //call useEffect to update nature
  //whenever natureProf is updated
  useEffect(() => {
    if (natureProf) {
      setNature(intMod + proficiencyBonus)
    } else {
      setNature(intMod)
    }
  }, [natureProf, intMod])

  //call useEffect to update perception
  //whenever perceptionProf is updated
  useEffect(() => {
    if (perceptionProf) {
      setPerception(wisMod + proficiencyBonus)
    } else {
      setPerception(wisMod)
    }
  }, [perceptionProf, wisMod])

  //call useEffect to update passive perception whenever perception changes
  useEffect(() => {
    setPassivePerception(perception + 10)
  }, [perception])

  //call useEffect to update performance
  //whenever performanceProf is updated
  useEffect(() => {
    if (performanceProf) {
      setPerformance(chaMod + proficiencyBonus)
    } else {
      setPerformance(chaMod)
    }
  }, [performanceProf, chaMod])

  //call useEffect to update persuasion
  //whenever persuasionProf is updated
  useEffect(() => {
    if (persuasionProf) {
      setPersuasion(chaMod + proficiencyBonus)
    } else {
      setPersuasion(chaMod)
    }
  }, [persuasionProf, chaMod])

  //call useEffect to update religion
  //whenever religionProf is updated
  useEffect(() => {
    if (religionProf) {
      setReligion(intMod + proficiencyBonus)
    } else {
      setReligion(intMod)
    }
  }, [religionProf, intMod])

  //call useEffect to update sleightOfHand
  //whenever sleightOfHandProf is updated
  useEffect(() => {
    if (sleightOfHandProf) {
      setSleightOfHand(dexMod + proficiencyBonus)
    } else {
      setSleightOfHand(dexMod)
    }
  }, [sleightOfHandProf, dexMod])

  //call useEffect to update stealth
  //whenever stealthProf is updated
  useEffect(() => {
    if (stealthProf) {
      setStealth(dexMod + proficiencyBonus)
    } else {
      setStealth(dexMod)
    }
  }, [stealthProf, dexMod])

  //call useEffect to update survival
  //whenever survivalProf is updated
  useEffect(() => {
    if (survivalProf) {
      setSurvival(wisMod + proficiencyBonus)
    } else {
      setSurvival(wisMod)
    }
  }, [survivalProf, wisMod])

  //take user inputs and setSkill
  const putSkill = async e => {
    const skillToUpdateOnServer = {
      characterId: parseInt(characterId),
      acrobaticsProf: acrobaticsProf,
      acrobatics: parseInt(acrobatics),
      animalHandlingProf: animalHandlingProf,
      animalHandling: parseInt(animalHandling),
      arcanaProf: arcanaProf,
      arcana: parseInt(arcana),
      athleticsProf: athleticsProf,
      athletics: parseInt(athletics),
      deceptionProf: deceptionProf,
      deception: parseInt(deception),
      historyProf: historyProf,
      history: parseInt(history),
      insightProf: insightProf,
      insight: parseInt(insight),
      investigationProf: investigationProf,
      investigation: parseInt(investigation),
      intimidationProf: intimidationProf,
      intimidation: parseInt(intimidation),
      medicineProf: medicineProf,
      medicine: parseInt(medicine),
      natureProf: natureProf,
      nature: parseInt(nature),
      perceptionProf: perceptionProf,
      perception: parseInt(perception),
      performanceProf: performanceProf,
      performance: parseInt(performance),
      persuasionProf: persuasionProf,
      persuasion: parseInt(persuasion),
      religionProf: religionProf,
      religion: parseInt(religion),
      sleightOfHandProf: sleightOfHandProf,
      sleightOfHand: parseInt(sleightOfHand),
      stealthProf: stealthProf,
      stealth: parseInt(stealth),
      survivalProf: survivalProf,
      survival: parseInt(survival),
      passivePerception: parseInt(passivePerception),
      id: skillId,
    }
    e.preventDefault()
    const resp = await axios.put('/api/Skill/put', skillToUpdateOnServer)
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
      <article className="Create-Char-Flex">
        <section className="Create-Char-Parent">
          <div className="Create-Char">
            <form className="Create-Char-Form">
              <div className="Site-Icon"></div>
              <h3>Skills:</h3>
              <h5>
                Acrobatics Proficiency? <br></br>
                <input
                  className="Acrobatics-Prof"
                  name="acrobaticsProf"
                  type="radio"
                  checked={acrobaticsProf === true ? 'checked' : ''}
                  onChange={e => setAcrobaticsProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Acrobatics-Prof"
                  name="acrobaticsProf"
                  type="radio"
                  checked={acrobaticsProf === false ? 'checked' : ''}
                  onChange={e => setAcrobaticsProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Acrobatics: {acrobatics}</h5>
              <h5>
                Animal Handling Proficiency? <br></br>
                <input
                  className="Animal-Handling-Prof"
                  name="animalHandlingProf"
                  type="radio"
                  checked={animalHandlingProf === true ? 'checked' : ''}
                  onChange={e => setAnimalHandlingProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Animal-Handling-Prof"
                  name="animalHandlingProf"
                  type="radio"
                  checked={animalHandlingProf === false ? 'checked' : ''}
                  onChange={e => setAnimalHandlingProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Animal Handling: {animalHandling}</h5>
              <h5>
                Arcana Proficiency? <br></br>
                <input
                  className="Arcana-Prof"
                  name="arcanaProf"
                  type="radio"
                  checked={arcanaProf === true ? 'checked' : ''}
                  onChange={e => setArcanaProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Arcana-Prof"
                  name="arcanaProf"
                  type="radio"
                  checked={arcanaProf === false ? 'checked' : ''}
                  onChange={e => setArcanaProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Arcana: {arcana}</h5>
              <h5>
                Athletics Proficiency? <br></br>
                <input
                  className="Athletics-Prof"
                  name="athleticsProf"
                  type="radio"
                  checked={athleticsProf === true ? 'checked' : ''}
                  onChange={e => setAthleticsProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Athletics-Prof"
                  name="athleticsProf"
                  type="radio"
                  checked={athleticsProf === false ? 'checked' : ''}
                  onChange={e => setAthleticsProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Athletics: {athletics}</h5>
              <h5>
                Deception Proficiency? <br></br>
                <input
                  className="Deception-Prof"
                  name="deceptionProf"
                  type="radio"
                  checked={deceptionProf === true ? 'checked' : ''}
                  onChange={e => setDeceptionProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Deception-Prof"
                  name="deceptionProf"
                  type="radio"
                  checked={deceptionProf === false ? 'checked' : ''}
                  onChange={e => setDeceptionProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Deception: {deception}</h5>
              <h5>
                History Proficiency? <br></br>
                <input
                  className="History-Prof"
                  name="historyProf"
                  type="radio"
                  checked={historyProf === true ? 'checked' : ''}
                  onChange={e => setHistoryProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="History-Prof"
                  name="historyProf"
                  type="radio"
                  checked={historyProf === false ? 'checked' : ''}
                  onChange={e => setHistoryProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>History: {history}</h5>
              <h5>
                Insight Proficiency? <br></br>
                <input
                  className="Insight-Prof"
                  name="insightProf"
                  type="radio"
                  checked={insightProf === true ? 'checked' : ''}
                  onChange={e => setInsightProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Insight-Prof"
                  name="insightProf"
                  type="radio"
                  checked={insightProf === false ? 'checked' : ''}
                  onChange={e => setInsightProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Insight: {insight}</h5>
              <h5>
                Intimidation Proficiency? <br></br>
                <input
                  className="Intimidation-Prof"
                  name="intimidationProf"
                  type="radio"
                  checked={intimidationProf === true ? 'checked' : ''}
                  onChange={e => setIntimidationProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Intimidation-Prof"
                  name="intimidationProf"
                  type="radio"
                  checked={intimidationProf === false ? 'checked' : ''}
                  onChange={e => setIntimidationProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Intimidation: {intimidation}</h5>
              <h5>
                Investigation Proficiency? <br></br>
                <input
                  className="Investigation-Prof"
                  name="investigationProf"
                  type="radio"
                  checked={investigationProf === true ? 'checked' : ''}
                  onChange={e => setInvestigationProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Investigation-Prof"
                  name="investigationProf"
                  type="radio"
                  checked={investigationProf === false ? 'checked' : ''}
                  onChange={e => setInvestigationProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Investigation: {investigation}</h5>
              <h5>
                Medicine Proficiency? <br></br>
                <input
                  classNaMe="medicine-Prof"
                  name="medicineProf"
                  type="radio"
                  checked={medicineProf === true ? 'checked' : ''}
                  onChange={e => setMedicineProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Medicine-Prof"
                  name="medicineProf"
                  type="radio"
                  checked={medicineProf === false ? 'checked' : ''}
                  onChange={e => setMedicineProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Medicine: {medicine}</h5>
              <h5>
                Nature Proficiency? <br></br>
                <input
                  className="Nature-Prof"
                  name="natureProf"
                  type="radio"
                  checked={natureProf === true ? 'checked' : ''}
                  onChange={e => setNatureProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Nature-Prof"
                  name="natureProf"
                  type="radio"
                  checked={natureProf === false ? 'checked' : ''}
                  onChange={e => setNatureProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Nature: {nature}</h5>
              <h5>
                Perception Proficiency? <br></br>
                <input
                  className="Perception-Prof"
                  name="perceptionProf"
                  type="radio"
                  checked={perceptionProf === true ? 'checked' : ''}
                  onChange={e => setPerceptionProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Perception-Prof"
                  name="perceptionProf"
                  type="radio"
                  checked={perceptionProf === false ? 'checked' : ''}
                  onChange={e => setPerceptionProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Perception: {perception}</h5>
              <h5>
                Performance Proficiency? <br></br>
                <input
                  className="Performance-Prof"
                  name="performanceProf"
                  type="radio"
                  checked={performanceProf === true ? 'checked' : ''}
                  onChange={e => setPerformanceProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Performance-Prof"
                  name="performanceProf"
                  type="radio"
                  checked={performanceProf === false ? 'checked' : ''}
                  onChange={e => setPerformanceProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Performance: {performance}</h5>
              <h5>
                Persuasion Proficiency? <br></br>
                <input
                  className="Persuasion-Prof"
                  name="persuasionProf"
                  type="radio"
                  checked={persuasionProf === true ? 'checked' : ''}
                  onChange={e => setPersuasionProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Persuasion-Prof"
                  name="persuasionProf"
                  type="radio"
                  checked={persuasionProf === false ? 'checked' : ''}
                  onChange={e => setPersuasionProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Persuasion: {persuasion}</h5>
              <h5>
                Religion Proficiency? <br></br>
                <input
                  className="Religion-Prof"
                  name="religionProf"
                  type="radio"
                  checked={religionProf === true ? 'checked' : ''}
                  onChange={e => setReligionProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Religion-Prof"
                  name="religionProf"
                  type="radio"
                  checked={religionProf === false ? 'checked' : ''}
                  onChange={e => setReligionProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Religion: {religion}</h5>
              <h5>
                Sleight Of Hand Proficiency? <br></br>
                <input
                  className="Sleight-Of-Hand-Prof"
                  name="sleightOfHandProf"
                  type="radio"
                  checked={sleightOfHandProf === true ? 'checked' : ''}
                  onChange={e => setSleightOfHandProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Sleight-Of-Hand-Prof"
                  name="sleightOfHandProf"
                  type="radio"
                  checked={sleightOfHandProf === false ? 'checked' : ''}
                  onChange={e => setSleightOfHandProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Sleight Of Hand: {sleightOfHand}</h5>
              <h5>
                Stealth Proficiency? <br></br>
                <input
                  className="Stealth-Prof"
                  name="stealthProf"
                  type="radio"
                  checked={stealthProf === true ? 'checked' : ''}
                  onChange={e => setStealthProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Stealth-Prof"
                  name="stealthProf"
                  type="radio"
                  checked={stealthProf === false ? 'checked' : ''}
                  onChange={e => setStealthProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Stealth: {stealth}</h5>
              <h5>
                Survival Proficiency? <br></br>
                <input
                  className="Survival-Prof"
                  name="survivalProf"
                  type="radio"
                  checked={survivalProf === true ? 'checked' : ''}
                  onChange={e => setSurvivalProf(true)}
                />{' '}
                Yes{' '}
                <input
                  className="Survival-Prof"
                  name="survivalProf"
                  type="radio"
                  checked={survivalProf === false ? 'checked' : ''}
                  onChange={e => setSurvivalProf(false)}
                />{' '}
                No{' '}
              </h5>
              <h5>Survival: {survival}</h5>
              <h5>Passive Perception: {passivePerception}</h5>
              <div className="Login-Button-Div">
                <button className="Login-Button" onClick={putSkill}>
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

export default SkillUpdate
