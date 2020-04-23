import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const SkillUpdate = props => {
  const characterId = parseInt(props.match.params.id)
  //set all vars for use of state
  const [skill, setSkill] = useState()
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [stat, setStat] = useState({})
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
  const [submitIsEnabled, setSubmitIsEnabled] = useState(false)

  //call useEffect to update acrobatics
  //whenever acrobaticsProf is updated
  useEffect(() => {
    console.log(stat.dexMod)
    console.log(stat.proficiencyBonus)
    console.log(stat)
    if (acrobaticsProf) {
      setAcrobatics(stat.dexMod + stat.proficiencyBonus)
    } else {
      setAcrobatics(stat.dexMod)
    }
  }, [acrobaticsProf])

  //call useEffect to update animalHandling
  //whenever animalHandlingProf is updated
  useEffect(() => {
    if (animalHandlingProf) {
      setAnimalHandling(stat.wisMod + stat.proficiencyBonus)
    } else {
      setAnimalHandling(stat.wisMod)
    }
  }, [animalHandlingProf])

  //call useEffect to update arcana
  //whenever arcanaProf is updated
  useEffect(() => {
    if (arcanaProf) {
      setArcana(stat.intMod + stat.proficiencyBonus)
    } else {
      setArcana(stat.intMod)
    }
  }, [arcanaProf])

  //call useEffect to update athletics
  //whenever athleticsProf is updated
  useEffect(() => {
    if (athleticsProf) {
      setAthletics(stat.strMod + stat.proficiencyBonus)
    } else {
      setAthletics(stat.strMod)
    }
  }, [athleticsProf])

  //call useEffect to update deception
  //whenever deceptionProf is updated
  useEffect(() => {
    if (deceptionProf) {
      setDeception(stat.chaMod + stat.proficiencyBonus)
    } else {
      setDeception(stat.chaMod)
    }
  }, [deceptionProf])

  //call useEffect to update history
  //whenever historyProf is updated
  useEffect(() => {
    if (historyProf) {
      setHistory(stat.intMod + stat.proficiencyBonus)
    } else {
      setHistory(stat.intMod)
    }
  }, [historyProf])

  //call useEffect to update insight
  //whenever insightProf is updated
  useEffect(() => {
    if (insightProf) {
      setInsight(stat.wisMod + stat.proficiencyBonus)
    } else {
      setInsight(stat.wisMod)
    }
  }, [insightProf])

  //call useEffect to update intimidation
  //whenever intimidationProf is updated
  useEffect(() => {
    if (intimidationProf) {
      setIntimidation(stat.chaMod + stat.proficiencyBonus)
    } else {
      setIntimidation(stat.chaMod)
    }
  }, [intimidationProf])

  //call useEffect to update investigation
  //whenever investigationProf is updated
  useEffect(() => {
    if (investigationProf) {
      setInvestigation(stat.intMod + stat.proficiencyBonus)
    } else {
      setInvestigation(stat.intMod)
    }
  }, [investigationProf])

  //call useEffect to update medicine
  //whenever medicineProf is updated
  useEffect(() => {
    if (medicineProf) {
      setMedicine(stat.wisMod + stat.proficiencyBonus)
    } else {
      setMedicine(stat.wisMod)
    }
  }, [medicineProf])

  //call useEffect to update nature
  //whenever natureProf is updated
  useEffect(() => {
    if (natureProf) {
      setNature(stat.intMod + stat.proficiencyBonus)
    } else {
      setNature(stat.intMod)
    }
  }, [natureProf])

  //call useEffect to update perception
  //whenever perceptionProf is updated
  useEffect(() => {
    if (perceptionProf) {
      setPerception(stat.wisMod + stat.proficiencyBonus)
    } else {
      setPerception(stat.wisMod)
    }
  }, [perceptionProf])

  //call useEffect to update passive perception whenever perception changes
  useEffect(() => {
    setPassivePerception(perception + 10)
  }, [perception])

  //call useEffect to update performance
  //whenever performanceProf is updated
  useEffect(() => {
    if (performanceProf) {
      setPerformance(stat.chaMod + stat.proficiencyBonus)
    } else {
      setPerformance(stat.chaMod)
    }
  }, [performanceProf])

  //call useEffect to update persuasion
  //whenever persuasionProf is updated
  useEffect(() => {
    if (persuasionProf) {
      setPersuasion(stat.chaMod + stat.proficiencyBonus)
    } else {
      setPersuasion(stat.chaMod)
    }
  }, [persuasionProf])

  //call useEffect to update religion
  //whenever religionProf is updated
  useEffect(() => {
    if (religionProf) {
      setReligion(stat.intMod + stat.proficiencyBonus)
    } else {
      setReligion(stat.intMod)
    }
  }, [religionProf])

  //call useEffect to update sleightOfHand
  //whenever sleightOfHandProf is updated
  useEffect(() => {
    if (sleightOfHandProf) {
      setSleightOfHand(stat.dexMod + stat.proficiencyBonus)
    } else {
      setSleightOfHand(stat.dexMod)
    }
  }, [sleightOfHandProf])

  //call useEffect to update stealth
  //whenever stealthProf is updated
  useEffect(() => {
    if (stealthProf) {
      setStealth(stat.dexMod + stat.proficiencyBonus)
    } else {
      setStealth(stat.dexMod)
    }
  }, [stealthProf])

  //call useEffect to update survival
  //whenever survivalProf is updated
  useEffect(() => {
    if (survivalProf) {
      setSurvival(stat.wisMod + stat.proficiencyBonus)
    } else {
      setSurvival(stat.wisMod)
    }
  }, [survivalProf])

  //take user inputs and setSkill
  const updateSkill = () => {
    setSkill({
      characterId: characterId,
      acrobaticsProf: acrobaticsProf,
      acrobatics: acrobatics,
      animalHandlingProf: animalHandlingProf,
      animalHandling: animalHandling,
      arcanaProf: arcanaProf,
      arcana: arcana,
      athleticsProf: athleticsProf,
      athletics: athletics,
      deceptionProf: deceptionProf,
      deception: deception,
      historyProf: historyProf,
      history: history,
      insightProf: insightProf,
      insight: insight,
      investigationProf: investigationProf,
      investigation: investigation,
      intimidationProf: intimidationProf,
      intimidation: intimidation,
      medicineProf: medicineProf,
      medicine: medicine,
      natureProf: natureProf,
      nature: nature,
      perceptionProf: perceptionProf,
      perception: perception,
      performanceProf: performanceProf,
      performance: performance,
      persuasionProf: persuasionProf,
      persuasion: persuasion,
      religionProf: religionProf,
      religion: religion,
      sleightOfHandProf: sleightOfHandProf,
      sleightOfHand: sleightOfHand,
      stealthProf: stealthProf,
      stealth: stealth,
      survivalProf: survivalProf,
      survival: survival,
      passivePerception: passivePerception,
    })
    setSubmitIsEnabled(true)
  }

  //update skills in db
  const putSkill = async e => {
    e.preventDefault()
    const resp = await axios.put('api/skill/put', skill)
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
      <article className="Create-Skill-Flex">
        <section className="Create-Skill-Parent">
          <div className="Create-Skill">
            <form className="Create-Skill-Form" onSubmit={putSkill}>
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
              <div className="Create-Skill-Button-Div">
                <button className="Create-Skill-Button" onClick={updateSkill}>
                  Save Skills
                </button>
              </div>
              <div className="Create-Skill-Button-Div">
                <button
                  disabled={!submitIsEnabled}
                  className="Create-Skill-Button"
                  onClick={putSkill}
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

export default SkillUpdate
