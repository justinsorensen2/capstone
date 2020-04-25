import React from 'react'
import { useState } from 'react'

const Subrace = props => {
  const race = props
  console.log(props)
  const [subrace, setSubrace] = useState()

  if (race === 'Dwarf') {
    return (
      <>
        <div className="Race-Bonus-And-Subrace">
          <div className="Race-Bonus">
            <h5>
              Dwarves have the following attributes:<br></br>
              1. Constitution + 2<br></br>
              2. Size: between 4 & 5 ft. (Medium)<br></br>
              3. Speed: 25 ft.<br></br>
              4. Darkvision: 60 ft.<br></br>
              5. Advantage on Saving Throws against poison.<br></br>
              6. Weapon Proficiency: Battleaxe, Handaxe, <br></br>
              Light Hammer, Warhammer <br></br>7. Tool Proficiency: Choose one
              of: Smith's Tools, <br></br>
              Brewer's Supplies, or Mason's Tools<br></br>
              8. Add double your proficiency bonus to any history<br></br>
              checks related to the origin of stonework. (Stonecunning){' '}
              <br></br>
              9. Languages: Speak, read, and write: Common and Dwarvish{' '}
              <br></br>
              10. Select one of the following dwarf subraces
            </h5>
          </div>
          <div className="Subrace">
            <h5>
              Subrace:
              <select
                className="Char-Subrace"
                name="subrace"
                type="text"
                onChange={e => setSubrace(e.target.value)}
              >
                <option value={null}>{''}</option>
                <option value="Hill Dwarf">Hill Dwarf</option>
                <option value="Mountain Dwarf">Mountain Dwarf</option>
              </select>
              {subrace === 'Hill Dwarf' ? (
                <>
                  <div className="Subrace-Bonus">
                    <h5>
                      Hill Dwarves have the following attributes:<br></br> 1.
                      Wisdom + 1 <br></br>2. HP Max increases by 1, and it
                      increases by one
                      <br></br>
                      every time you gain a level.
                    </h5>
                  </div>
                </>
              ) : (
                <>
                  <div className="Subrace-Bonus">
                    <h5>
                      Mountain Dwarves have the following attributes: <br></br>
                      1. Strength + 2<br></br> 2. Armor Proficiency: Light and
                      Medium Armor
                    </h5>
                  </div>
                </>
              )}
            </h5>
          </div>
        </div>
      </>
    )
  }
  return <div></div>
}

export default Subrace
