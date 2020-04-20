import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CharacterDetails = props => {
  //set charId based on props from url
  const characterId = props.match.params.id

  const [character, setCharacter] = useState({})
  const [stat, setStat] = useState({})

  //axios get for character details
  const getCharacterDetails = async characterId => {
    return await axios.get('/api/character/', characterId).then(response => {
      //set var for character from axios get
      setCharacter(response.data)
      console.log('character get' + response.data)
    })
  }

  const getStatDetails = async characterId => {
    return await axios.get('/api/stat/', characterId).then(response => {
      //set var for character from axios get
      setStat(response.data)
      console.log('stat get' + response.data)
    })
  }

  //useEffect to call axios get when page loads
  useEffect(() => {
    getCharacterDetails(characterId)
    getStatDetails(characterId)
  }, [])

  //render
  if (!stat) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <article className="Char-Details-Flex">
        <section className="Char-Details-Parent">
          <div className="Char-Details">
            <div className="Char-Details-Top-Bar">
              <div className="Name-Class-Level">
                <div className="Name">
                  Character: {character.characterFirst}
                  {''}
                  {character.characterLast}
                </div>
                <div className="Primary-Class">
                  Class: {character.characterClass}
                </div>
                <div className="Primary-Class-Level">
                  Class Level: {character.primaryClassLevel}
                </div>
                {character.secondaryClass === '' ? (
                  <>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div className="Secondary-Class">
                      Secondary Class: {character.secondaryClass}
                    </div>
                    <div className="Secondary-Class-Level">
                      Secondary Class Level: {character.secondaryClassLevel}
                    </div>
                  </>
                )}
              </div>
              <div className="Race-Alignment-XP">
                <div className="Race">Race: {character.characterRace}</div>
                <div className="Alignment">
                  Alignment: {character.alignment}
                </div>
                <div className="XP">XP: {character.experiencePoints}</div>
              </div>
            </div>
            <div className="Full-Left-Bar">
              <div className="Char-Details-Left-Bar-Stats-And-Skills">
                <div className="Char-Details-Left-Bar-Stats">
                  <div className="Char-Details-Strength">
                    Strength<br></br>
                    {stat.strMod}
                    <br></br>
                    {stat.strength}
                  </div>
                  <div className="Char-Details-Dexterity">
                    Dexterity<br></br>
                    {stat.dexMod}
                    <br></br>
                    {stat.dexterity}
                  </div>
                  <div className="Char-Details-Constitution">
                    Constitution<br></br>
                    {stat.conMod}
                    <br></br>
                    {stat.constitution}
                  </div>
                  <div className="Char-Details-Intelligence">
                    Intelligence<br></br>
                    {stat.intMod}
                    <br></br>
                    {stat.intelligence}
                  </div>
                  <div className="Char-Details-Wisdom">
                    Wisdom<br></br>
                    {stat.wisMod}
                    <br></br>
                    {stat.wisdom}
                  </div>
                  <div className="Char-Details-Charisma">
                    Charisma<br></br>
                    {stat.chaMod}
                    <br></br>
                    {stat.charisma}
                  </div>
                </div>
                <div className="Char-Details-Left-Bar-Skills">
                  <div className="Char-Details-Inspiration-Parent">
                    <div className="Char-Details-Inspiration">
                      Inspiration: {stat.inspiration}
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
                    <div className="Strength-Saving-Throw">
                      Strength: {stat.strSavingThrow} Proficiency?{' '}
                      {stat.strSavingThrowProf}
                    </div>
                    <div className="Dexterity-Saving-Throw">
                      Dexterity: {stat.dexSavingThrow} Proficiency?{' '}
                      {stat.dexSavingThrowProf}
                    </div>
                    <div className="Constitution-Saving-Throw">
                      Constitution: {stat.conSavingThrow} Proficiency?{' '}
                      {stat.conSavingThrowProf}
                    </div>
                    <div className="Intelligence-Saving-Throw">
                      Intelligence: {stat.intSavingThrow} Proficiency?{' '}
                      {stat.intSavingThrowProf}
                    </div>
                    <div className="Wisdom-Saving-Throw">
                      Wisdom: {stat.wisSavingThrow} Proficiency?{' '}
                      {stat.wisSavingThrowProf}
                    </div>
                    <div className="Charisma-Saving-Throw">
                      Charisma: {stat.chaSavingThrow} Proficiency?{' '}
                      {stat.chaSavingThrowProf}
                    </div>
                  </div>
                </div>
                <div className="Skills">
                  Skills
                  <div className="Skills-Acrobatics">
                    Acrobatics(Dex): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Animal-Handling">
                    Animal Handling(Wis): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Arcana">
                    Arcana(Int): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Athletics">
                    Athletics(Str): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Deception">
                    Deception(Cha): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-History">
                    History(Int): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Insight">
                    Insight(Wis): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Intimidation">
                    Intimidation(Cha): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Investigation">
                    Investigation(Int): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Medicine">
                    Medicine(Wis): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Nature">
                    Nature(Int): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Perception">
                    Perception(Wis): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Performance">
                    Performance(Cha): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Persuasion">
                    Persuasion(Cha): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Religion">
                    Religion(Int): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Sleight-Of-Hand">
                    Sleight of Hand(Dex): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Stealth">
                    Stealth(Dex): ranks Proficiency? y/n
                  </div>
                  <div className="Skills-Survival">
                    Survival(Wis): ranks Proficiency? y/n
                  </div>
                </div>
              </div>
              <div className="Left-Bar-Perception-And-Lang-And-Other">
                <div className="Perception">
                  Passive Wisdom (Perception): 10+Perception
                </div>
                {character.languages === null ? (
                  <>
                    {' '}
                    <div> nothing here </div>{' '}
                  </>
                ) : (
                  <>
                    <div>
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
                    Initiative<br></br>
                    {stat.initiativeBonus}
                  </div>
                  <div className="Speed">
                    Speed<br></br>
                    {stat.baseSpeed}
                  </div>
                </div>
                <div className="HP-And-Temp-HP">
                  <div className="Current-HP">
                    HP Max: {stat.maxHP}
                    <br></br>
                    Current HP: {stat.currentHP}
                  </div>
                  <div className="Temp-HP">Temp HP: {stat.tempHP}</div>
                </div>
                <div className="Hit-Die-And-Death-Saves">
                  <div className="Hit-Dice">
                    Total Hit Dice: {stat.totalHitDie} <br></br>
                    Current Hit Dice: {stat.currentHitDie} {stat.hitDie}
                  </div>
                  <div className="Death-Saves">
                    Death Saves
                    <div className="Success">
                      Successes: {stat.deathSaveSuccess1}{' '}
                      {stat.deathSaveSuccess2} {stat.deathSaveSuccess3}
                      <br></br>
                      Failures: {stat.deathSaveFailure1}{' '}
                      {stat.deathSaveFailure2} {stat.deathSaveFailure3}
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
                Equipment
                <div className="Money">
                  <div className="CP">CP</div>
                  <div className="SP">SP</div>
                  <div className="EP">EP</div>
                  <div className="GP">GP</div>
                  <div className="PP">PP</div>
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
                Features & Traits<br></br>
                {character.featuresTraits}
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export default CharacterDetails
