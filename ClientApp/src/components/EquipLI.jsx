import React from 'react'
import axios from 'axios'

const EquipLI = props => {
  const equip = props

  //axios call to delete item
  const deleteItem = async e => {
    const id = e.target.id
    const resp = await axios.put('api/equip/delete', id)
    if (resp.status === 200 || resp.status === 201) {
      // redirect page to char details
      console.log(resp.data)
    } else {
      //display an error message
      throw new MessageEvent()
    }
  }
  return (
    <div>
      <li className="Equip-List">
        <div className="Equip-List-Item">
          <h5>Equipment Name: {equip.equipName}</h5>
          <h5>Bonus(if any): {equip.bonus}</h5>
          <p>Equipment Description: {equip.description}</p>
          <p>
            Weapon?{' '}
            <input
              name="isWeapon"
              value={equip.isWeapon}
              type="checkbox"
              checked={equip.isWeapon === true}
            ></input>
          </p>
          <div className="Delete-Equip-Button-Parent">
            <button
              className="Delete-Equip-Button"
              id={equip.id}
              onClick={deleteItem}
            >
              Delete Item
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default EquipLI
