import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EquipLI from '../components/EquipLI'

const CharacterDetails = props => {
  //set charId based on props from url
  const characterId = props.match.params.id
  //set vars for data gets from API to use state
  const [character, setCharacter] = useState({})
  const [stat, setStat] = useState({})
  const [skill, setSkill] = useState({})
  const [equip, setEquip] = useState([])
  const [money, setMoney] = useState({})

  //axios get for character details
  const getCharacterDetails = async characterId => {
    return await axios.get(`/api/character/${characterId}`).then(response => {
      //set var for character from axios get
      setCharacter(response.data)
      console.log('character get' + response.data)
    })
  }
  // axios get for stat details
  const getStatDetails = async characterId => {
    return await axios.get(`/api/stat/${characterId}`).then(response => {
      //set var for character from axios get
      setStat(response.data)
      console.log('stat get' + response.data)
    })
  }

  // axios get for skill details
  const getSkillDetails = async characterId => {
    return await axios.get(`/api/skill/${characterId}`).then(response => {
      //set var for character from axios get
      setSkill(response.data)
      console.log('Skill get' + response.data)
    })
  }

  //axios get for Equip details
  const getEquipDetails = async characterId => {
    return await axios.get(`/api/equip/${characterId}`).then(response => {
      //set var for Equip from axios get
      setEquip(response.data)
      console.log('Equip get' + response.data)
    })
  }

  //axios get for Money details
  const getMoneyDetails = async characterId => {
    return await axios.get(`/api/money/${characterId}`).then(response => {
      //set var for Money from axios get
      setMoney(response.data)
    })
  }

  //useEffect to call axios get when page loads
  useEffect(() => {
    getCharacterDetails(characterId)
    getStatDetails(characterId)
    getSkillDetails(characterId)
    getEquipDetails(characterId)
    getMoneyDetails(characterId)
  }, [])

  //render
  if (!stat) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <article className="Create-Char-Flex">
        <section className="Create-Char-Parent">
          <div className="Create-Char">
            Character Sheet:
            <div className="Char-Details-Top-Bar">
              <div className="Name-Class-Level">
                <div className="Name">
                  <h5>
                    Character: {character.characterFirst}
                    {'   '}
                    {character.characterLast}
                  </h5>
                </div>
                <div className="Primary-Class">
                  <h5>Class: {character.characterClass}</h5>
                </div>
                <div className="Primary-Class-Level">
                  <h5>Class Level: {character.primaryClassLevel}</h5>
                </div>
                {character.secondaryClass === null ? (
                  <>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div className="Secondary-Class">
                      <h5>Secondary Class: {character.secondaryClass}</h5>
                    </div>
                    <div className="Secondary-Class-Level">
                      <h5>
                        Secondary Class Level: {character.secondaryClassLevel}
                      </h5>
                    </div>
                  </>
                )}
              </div>
              <div className="Race-Alignment-XP">
                <div className="Race">
                  <h5>Race: {character.characterRace}</h5>
                </div>
                <div className="Size">
                  <h5>Size: {character.size}</h5>
                </div>
                <div className="Alignment">
                  <h5>Alignment: {character.alignment}</h5>
                </div>
                <div className="XP">
                  <h5>XP: {character.experiencePoints}</h5>
                </div>
              </div>
            </div>
            <div className="Full-Left-Bar">
              <div className="Char-Details-Left-Bar-Stats-And-Skills">
                <div className="Char-Details-Left-Bar-Stats">
                  <div className="Char-Details-Strength">
                    Str<br></br>
                    Mod: {stat.strMod}
                    <br></br>
                    {stat.strength}
                  </div>
                  <div className="Char-Details-Strength">
                    Dex<br></br>
                    Mod: {stat.dexMod}
                    <br></br>
                    {stat.dexterity}
                  </div>
                  <div className="Char-Details-Strength">
                    Con<br></br>
                    Mod: {stat.conMod}
                    <br></br>
                    {stat.constitution}
                  </div>
                  <div className="Char-Details-Strength">
                    Int<br></br>
                    Mod: {stat.intMod}
                    <br></br>
                    {stat.intelligence}
                  </div>
                  <div className="Char-Details-Strength">
                    Wis<br></br>
                    Mod: {stat.wisMod}
                    <br></br>
                    {stat.wisdom}
                  </div>
                  <div className="Char-Details-Strength">
                    Cha<br></br>
                    Mod: {stat.chaMod}
                    <br></br>
                    {stat.charisma}
                  </div>
                </div>
                <div className="Char-Details-Left-Bar-Skills">
                  <div className="Char-Details-Inspiration-Parent">
                    <div className="Char-Details-Inspiration">
                      Inspiration:{' '}
                      <input
                        name="Inspiration"
                        value={stat.inspiration}
                        type="checkbox"
                        checked={stat.inspiration === true}
                      ></input>
                    </div>
                  </div>
                  <div className="Char-Details-Proficiency-Bonus-Parent">
                    <div className="Char-Details-Proficiency-Bonus">
                      Proficiency Bonus: {stat.proficiencyBonus}
                    </div>
                  </div>
                  {character.darkvision >= 1 ? (
                    <>
                      {' '}
                      <div className="Char-Details-Darkvision-Parent">
                        <div className="Char-Details-Darkvision">
                          Darkvision: {character.darkvision}ft.
                        </div>
                      </div>{' '}
                    </>
                  ) : (
                    <>
                      {' '}
                      <div className="Char-Details-Darkvision-Parent">
                        <div className="Char-Details-Darkvision">
                          Darkvision: None
                        </div>
                      </div>{' '}
                    </>
                  )}
                  <div className="Char-Details-Saving-Throws">
                    Saving Throws
                    <div className="Saving-Throw">
                      Strength Throw: {stat.strSavingThrow} Prof?{' '}
                      <input
                        name="SSTP"
                        value={stat.strSavingThrowProf}
                        type="checkbox"
                        checked={stat.strSavingThrowProf === true}
                      ></input>
                    </div>
                    <div className="Saving-Throw">
                      Dexterity Throw: {stat.dexSavingThrow} Prof?{' '}
                      <input
                        name="DSTP"
                        value={stat.dexSavingThrowProf}
                        type="checkbox"
                        checked={stat.dexSavingThrowProf === true}
                      ></input>
                    </div>
                    <div className="Saving-Throw">
                      Constitution Throw: {stat.conSavingThrow} Prof?{' '}
                      <input
                        name="CSTP"
                        value={stat.conSavingThrowProf}
                        type="checkbox"
                        checked={stat.conSavingThrowProf === true}
                      ></input>
                    </div>
                    <div className="Saving-Throw">
                      Intelligence Throw: {stat.intSavingThrow} Prof?{' '}
                      <input
                        name="ISTP"
                        value={stat.intSavingThrowProf}
                        type="checkbox"
                        checked={stat.intSavingThrowProf === true}
                      ></input>
                    </div>
                    <div className="Saving-Throw">
                      Wisdom Throw: {stat.wisSavingThrow} Prof?{' '}
                      <input
                        name="WSTP"
                        value={stat.wisSavingThrowProf}
                        type="checkbox"
                        checked={stat.wisSavingThrowProf === true}
                      ></input>
                    </div>
                    <div className="Saving-Throw">
                      Charisma Throw: {stat.chaSavingThrow} Prof?{' '}
                      <input
                        name="CSTP"
                        value={stat.chaSavingThrowProf}
                        type="checkbox"
                        checked={stat.chaSavingThrowProf === true}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="Skills">
                  Skills
                  <div className="Skill-Item">
                    Acrobatics(Dex): {skill.acrobatics} Prof?{' '}
                    <input
                      name="AcroProf"
                      value={skill.acrobaticsProf}
                      type="checkbox"
                      checked={skill.acrobaticsProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Animal Handling(Wis): {skill.animalHandling} Prof?{' '}
                    <input
                      name="AnimProf"
                      value={skill.animalHandlingProf}
                      type="checkbox"
                      checked={skill.animalHandlingProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Arcana(Int): {skill.arcana} Prof?{' '}
                    <input
                      name="ArcanaProf"
                      value={skill.arcanaProf}
                      type="checkbox"
                      checked={skill.arcanaProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Athletics(Str): {skill.athletics} Prof?{' '}
                    <input
                      name="AthleticsProf"
                      value={skill.athleticsProf}
                      type="checkbox"
                      checked={skill.athleticsProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Deception(Cha): {skill.deception} Prof?{' '}
                    <input
                      name="DeceptProf"
                      value={skill.deceptionProf}
                      type="checkbox"
                      checked={skill.deceptionProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    History(Int): {skill.history} Prof?{' '}
                    <input
                      name="HistoryProf"
                      value={skill.historyProf}
                      type="checkbox"
                      checked={skill.historyProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Insight(Wis): {skill.insight} Prof?{' '}
                    <input
                      name="InsightProf"
                      value={skill.insightProf}
                      type="checkbox"
                      checked={skill.insightProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Intimidation(Cha): {skill.intimidation} Prof?{' '}
                    <input
                      name="IntimidationProf"
                      value={skill.intimidationProf}
                      type="checkbox"
                      checked={skill.intimidationProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Investigation(Int): {skill.investigation} Prof?{' '}
                    <input
                      name="InvestigationProf"
                      value={skill.investigationProf}
                      type="checkbox"
                      checked={skill.investigationProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Medicine(Wis): {skill.medicine} Prof?{' '}
                    <input
                      name="MedicineProf"
                      value={skill.medicineProf}
                      type="checkbox"
                      checked={skill.medicineProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Nature(Int): {skill.nature} Prof?{' '}
                    <input
                      name="NatureProf"
                      value={skill.natureProf}
                      type="checkbox"
                      checked={skill.natureProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Perception(Wis): {skill.perception} Prof?{' '}
                    <input
                      name="PerceptionProf"
                      value={skill.perceptionProf}
                      type="checkbox"
                      checked={skill.perceptionProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Performance(Cha): {skill.performance} Prof?{' '}
                    <input
                      name="PerformanceProf"
                      value={skill.performanceProf}
                      type="checkbox"
                      checked={skill.performanceProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Persuasion(Cha): {skill.persuasion} Prof?{' '}
                    <input
                      name="PersuasionProf"
                      value={skill.persuasionProf}
                      type="checkbox"
                      checked={skill.persuasionProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Religion(Int): {skill.religion} Prof?{' '}
                    <input
                      name="ReligionProf"
                      value={skill.religionProf}
                      type="checkbox"
                      checked={skill.religionProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Sleight of Hand(Dex): {skill.sleightOfHand} Prof?{' '}
                    <input
                      name="SleightOfHandProf"
                      value={skill.sleightOfHandProf}
                      type="checkbox"
                      checked={skill.sleightOfHandProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Stealth(Dex): {skill.stealth} Prof?{' '}
                    <input
                      name="StealthProf"
                      value={skill.stealthProf}
                      type="checkbox"
                      checked={skill.stealthProf === true}
                    ></input>
                  </div>
                  <div className="Skill-Item">
                    Survival(Wis): {skill.survival} Prof?{' '}
                    <input
                      name="SurvivalProf"
                      value={skill.survivalProf}
                      type="checkbox"
                      checked={skill.survivalProf === true}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="Left-Bar-Perception-And-Lang-And-Other">
                <div className="Perception">
                  Passive Wisdom (Perception): {skill.passivePerception}
                </div>
                {character.languages === null ? (
                  <>
                    {' '}
                    <div className="Char-Det-Lang"> nothing here </div>{' '}
                  </>
                ) : (
                  <>
                    <div className="Char-Det-Lang">
                      Languages: <br></br>
                      {character.languages}
                    </div>
                  </>
                )}
                <div className="Other-Proficiencies">
                  Other Proficiencies:<br></br>
                  {character.otherProficiencies}
                </div>
              </div>
            </div>
            <div className="Middle-Bar">
              <div className="AC-HP-Death-Saves-Etc">
                <div className="AC-Initiative-Speed">
                  <div className="AC">
                    Armor Class<br></br>
                    {stat.armorClass}
                  </div>
                  <div className="Initiative">
                    Initiative Bonus: {stat.initiativeBonus}
                  </div>
                  <div className="Speed">Speed: {stat.baseSpeed}ft.</div>
                </div>
                <div className="HP-And-Temp-HP">
                  <div className="HP">
                    HP:{' '}
                    <span>
                      {stat.currentHP} / {stat.maxHP}
                    </span>
                  </div>
                  <div className="Temp-HP">
                    Temp HP: <span>{stat.tempHP}</span>
                  </div>
                </div>
                <div className="Hit-Die-And-Death-Saves">
                  <div className="Hit-Dice">
                    Hit Dice: {stat.currentHitDie}
                    {stat.hitDie} /{stat.totalHitDie}
                    {stat.hitDie}
                    <br></br>
                  </div>
                  <div className="Death-Saves">
                    Death Saves
                    <div className="Success">
                      Successes:{' '}
                      <input
                        name="DSS1"
                        value={stat.deathSaveSuccess1}
                        type="checkbox"
                        checked={stat.deathSaveSuccess1 === true}
                      ></input>{' '}
                      <input
                        name="DSS2"
                        value={stat.deathSaveSuccess2}
                        type="checkbox"
                        checked={stat.deathSaveSuccess2 === true}
                      ></input>{' '}
                      <input
                        name="DSS3"
                        value={stat.deathSaveSuccess3}
                        type="checkbox"
                        checked={stat.deathSaveSuccess3 === true}
                      ></input>
                      <br></br>
                      Failures:{' '}
                      <input
                        name="DSF1"
                        value={stat.deathSaveFailure1}
                        type="checkbox"
                        checked={stat.deathSaveFailure1 === true}
                      ></input>{' '}
                      <input
                        name="DSF2"
                        value={stat.deathSaveFailure2}
                        type="checkbox"
                        checked={stat.deathSaveFailure2 === true}
                      ></input>{' '}
                      <input
                        name="DSF3"
                        value={stat.deathSaveFailure3}
                        type="checkbox"
                        checked={stat.deathSaveFailure3 === true}
                      ></input>{' '}
                    </div>
                  </div>
                </div>
              </div>
              <div className="Attacks-And-Spells">
                Attacks & Spellcasting
                <div className="Attack">
                  Attack Name, Atk Bonus, Damage Type
                </div>
              </div>
              <div className="Equipment">
                <div className="Current-Equipment">
                  Equipment
                  <ul className="Equip-List">
                    {equip.map(item => {
                      return (
                        <EquipLI
                          key={item.id}
                          id={item.id}
                          equipName={item.equipName}
                          bonus={item.bonus}
                          description={item.description}
                          damageType={item.damageType}
                          range={item.range}
                          isWeapon={item.isWeapon}
                        />
                      )
                    })}
                  </ul>
                </div>
                <div className="Money">
                  <div className="Pieces">
                    CP:{money.copperPieces} SP:{money.silverPieces} EP:
                    {money.electrumPieces} GP:{money.goldPieces} PP:
                    {money.platinumPieces}
                  </div>
                </div>
              </div>
            </div>
            <div className="Right-Bar">
              <div className="Ideals-Bonds-Flaws">
                <div className="Personality-Traits">
                  Personality Traits: {character.personalityTraits}
                </div>
                <div className="Ideals">Ideals: {character.ideals}</div>
                <div className="Bonds">Bonds: {character.bonds}</div>
                <div className="Flaws">Flaws: {character.flaws}</div>
              </div>
              <div className="Features-And-Traits">
                Features & Traits:<br></br>
                {character.featuresTraits}
              </div>
            </div>
            <div className="Bottom-Bar">
              <div className="Backstory">
                Backstory:<br></br>
                {character.backStory}
              </div>
              <div className="Allies-&-Orgs">
                Allies & Organizations:<br></br>
                {character.alliesOrganizations}
              </div>
              <div className="Treasure">
                Treasure:<br></br>
                {character.treasure}
              </div>
            </div>
            <h5 className="Update-Buttons">
              <div className="Login-Button-Div">
                <Link to={`/CharacterUpdate/${characterId}`}>
                  <button className="Login-Button" name="CharacterUpdate">
                    Update Character
                  </button>
                </Link>
              </div>
              <div className="Login-Button-Div">
                <Link to={`/StatUpdate/${characterId}`}>
                  <button className="Login-Button" name="StatUpdate">
                    Update Stats
                  </button>
                </Link>
              </div>
              <div className="Login-Button-Div">
                <Link to={`/SkillUpdate/${characterId}`}>
                  <button className="Login-Button" name="SkillUpdate">
                    Update Skills
                  </button>
                </Link>
              </div>
              <div className="Login-Button-Div">
                <Link to={`/EquipmentUpdate/${characterId}`}>
                  <button className="Login-Button" name="EquipmentUpdate">
                    Update Equip & Money
                  </button>
                </Link>
              </div>
            </h5>
          </div>
        </section>
      </article>
    </div>
  )
}

export default CharacterDetails
