import React from 'react'

const DraconicAncestry = () => {
  return (
    <div>
      {characterRace === 'Dragonborn' ? (
        <>
          <div className="Draconic-Ancestry">
            11. Select one of the following {characterRace} ancestries:
            <input
              className="draconicAncestry"
              name="Black"
              type="radio"
              value={draconicAncestry.name}
              onChange={updateDraconicAncestry}
            >
              {' '}
              Black Dragon- Breath Weapon: Acid Range: 5 by 30ft. line
              <br></br>
            </input>
            <input
              className="draconicAncestry"
              name="Blue"
              type="radio"
              value={draconicAncestry.name}
              onChange={updateDraconicAncestry}
            >
              {' '}
              Blue Dragon- Breath Weapon: Lightning Range: 5 by 30ft. line
              <br></br>
            </input>
            <input
              className="draconicAncestry"
              name="Brass"
              type="radio"
              value={draconicAncestry.name}
              onChange={updateDraconicAncestry}
            >
              {' '}
              Brass Dragon- Breath Weapon: Fire Range: 5 by 30ft. line
              <br></br>
            </input>
            <input
              className="draconicAncestry"
              name="Bronze"
              type="radio"
              value={draconicAncestry.name}
              onChange={updateDraconicAncestry}
            >
              {' '}
              Bronze Dragon- Breath Weapon: Lightning Range: 5 by 30ft. line
              <br></br>
            </input>
            <input
              className="draconicAncestry"
              name="Copper"
              type="radio"
              value={draconicAncestry.name}
              onChange={updateDraconicAncestry}
            >
              {' '}
              Copper Dragon- Breath Weapon: Acid Range: 5 by 30ft. line
              <br></br>
            </input>
            <input
              className="draconicAncestry"
              name="Gold"
              type="radio"
              value={draconicAncestry.name}
              onChange={updateDraconicAncestry}
            >
              {' '}
              Gold Dragon- Breath Weapon: Fire Range: 15ft. cone<br></br>
            </input>
            <input
              className="draconicAncestry"
              name="Green"
              type="radio"
              value={draconicAncestry.name}
              onChange={updateDraconicAncestry}
            >
              {' '}
              Green Dragon- Breath Weapon: Poison Range: 15 ft. Cone
              <br></br>
            </input>
            <input
              className="draconicAncestry"
              name="Red"
              type="radio"
              value={draconicAncestry.name}
              onChange={updateDraconicAncestry}
            >
              {' '}
              Red Dragon- Breath Weapon: Fire Range: 15 ft. Cone<br></br>
            </input>
            <input
              className="draconicAncestry"
              name="Silver"
              type="radio"
              value={draconicAncestry.name}
              onChange={updateDraconicAncestry}
            >
              {' '}
              Silver Dragon- Breath Weapon: Cold Range: 15 ft. Cone
              <br></br>
            </input>
            <input
              className="draconicAncestry"
              name="White"
              type="radio"
              value={draconicAncestry.name}
              onChange={updateDraconicAncestry}
            >
              {' '}
              White Dragon- Breath Weapon: Cold Range: 15 ft. Cone
              <br></br>
            </input>
          </div>
        </>
      ) : (
        <> </>
      )}
    </div>
  )
}

export default DraconicAncestry
