import React from 'react'
import axios from 'axios'

const EquipLI = props => {
  const equip = props

  //axios call to delete item
  const deleteItem = async e => {
    const id = equip.id
    const characterId = equip.characterId
    console.log('id before delete', id)
    const resp = await axios.delete(`/api/Equip/delete?id=${id}`)
    if (resp.status === 200 || resp.status === 201) {
      // redirect page to char details
      const response = await axios.delete(`/api/Attack/delete?id=${id}`)
    } else {
      //display an error message
      throw new MessageEvent()
    }
  }
  return (
    <div>
      <li className="Equip-List">
        <div className="Equip-List-Item">
          <p>
            {equip.equipName} {equip.bonus}
            <br></br>
            Damage Type: {equip.damageType} <br></br> Range: {equip.range}
            <br></br>
            Description: {equip.description}
          </p>
          <div className="Login-Button-Div">
            <button className="Login-Button" id={equip.id} onClick={deleteItem}>
              Delete Item
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default EquipLI
