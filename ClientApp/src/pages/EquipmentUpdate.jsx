import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EquipLI from '../components/EquipLI'

const EquipmentUpdate = props => {
  //set char id = to props.id
  const characterId = parseInt(props.match.params.id)
  //set useState for equipment and money from axios get
  const [equip, setEquip] = useState([])
  const [money, setMoney] = useState({})
  //set vars for user inputs
  const [copperPieces, setCopperPieces] = useState()
  const [silverPieces, setSilverPieces] = useState()
  const [electrumPieces, setElectrumPieces] = useState()
  const [goldPieces, setGoldPieces] = useState()
  const [platinumPieces, setPlatinumPieces] = useState()
  const [moneyExists, setMoneyExists] = useState(false)
  const [item, setItem] = useState({ characterId: characterId })
  const [moneyId, setMoneyId] = useState()
  const [newMoney, setNewMoney] = useState({})

  //axios get for Equip details
  const getEquipDetails = async characterId => {
    return await axios.get(`/api/equip/${characterId}`).then(response => {
      //set var for Equip from axios get
      setEquip(response.data)
    })
  }

  //axios get for Money details
  const getMoneyDetails = async characterId => {
    return await axios.get(`/api/money/${characterId}`).then(response => {
      //set var for Money from axios get
      setMoney(response.data)
      setCopperPieces(response.data.copperPieces)
      setSilverPieces(response.data.silverPieces)
      setElectrumPieces(response.data.electrumPieces)
      setGoldPieces(response.data.goldPieces)
      setPlatinumPieces(response.data.platinumPieces)
      if (response.data === {}) {
        setMoneyExists(false)
      } else {
        setMoneyExists(true)
        setMoneyId(response.data.id)
      }
    })
  }
  console.log(copperPieces)

  //useEffect to call axios get when page loads
  useEffect(() => {
    getEquipDetails(characterId)
    getMoneyDetails(characterId)
  }, [])

  //create equip data from user inputs
  const updateItem = e => {
    const key = e.target.name
    const value = e.target.value
    setItem(prevItem => {
      return { ...prevItem, [key]: value }
    })
  }

  //create equip data from user inputs
  const updateBoolItem = e => {
    const key = e.target.name
    const value = e.target.value === 'true'
    setItem(prevItem => {
      return { ...prevItem, [key]: value }
    })
  }

  //call axios put to update equip
  const postEquip = async e => {
    e.preventDefault()
    const resp = await axios.post('/api/equip/create', item)
    if (resp.status === 200 || resp.status === 201) {
      console.log(resp.data)
    } else {
      //display an error message
      throw new MessageEvent()
    }
  }

  //call axios put or post to update money
  const putMoney = async e => {
    e.preventDefault()
    console.log(money)
    console.log(moneyExists)
    if (!moneyExists) {
      setNewMoney({
        copperPieces: copperPieces,
        silverPieces: silverPieces,
        electrumPieces: electrumPieces,
        goldPieces: goldPieces,
        platinumPieces: platinumPieces,
        characterId: characterId,
      })
      console.log(newMoney)
      //(no money in db) run post
      const resp = await axios.post('/api/money/create', newMoney)
      if (resp.status === 200 || resp.status === 201) {
        console.log(resp.data)
      } else {
        //display an error message
        throw new MessageEvent()
      }
    } else {
      setNewMoney({
        copperPieces: copperPieces,
        silverPieces: silverPieces,
        electrumPieces: electrumPieces,
        goldPieces: goldPieces,
        platinumPieces: platinumPieces,
        id: moneyId,
        characterId: characterId,
      })
      console.log(newMoney)
      //if money already in db, run put
      const resp = await axios.put('/api/money/put', newMoney)
      if (resp.status === 200 || resp.status === 201) {
        console.log(resp.data)
      } else {
        //display an error message
        throw new MessageEvent()
      }
    }
  }

  //render
  return (
    <div className="Equipment-Update">
      <article className="Equip-Update-Flex">
        <section className="Equip-Update-Parent">
          <div className="Current-Money">
            <div className="Money-List-Parent">
              <div className="Money-List">
                <h5>CP: {money.copperPieces}</h5>
                <h5>SP: {money.silverPieces}</h5>
                <h5>EP: {money.electrumPieces}</h5>
                <h5>GP: {money.goldPieces}</h5>
                <h5>PP: {money.platinumPieces}</h5>
              </div>
            </div>
          </div>
          <form className="Add-Money" onSubmit={putMoney}>
            <div className="Put-Money-Button-Parent">
              <button className="Put-Money-Button">Submit Money</button>
            </div>
            <div className="Add-Copper">
              <h5>
                Copper Pieces:
                <input
                  name="copperPieces"
                  type="number"
                  defaultValue={copperPieces}
                  onChange={e => setCopperPieces(parseInt(e.target.value))}
                />
              </h5>
            </div>
            <div className="Add-Silver">
              <h5>
                Silver Pieces:
                <input
                  name="silverPieces"
                  type="number"
                  defaultValue={silverPieces}
                  onChange={e => setSilverPieces(parseInt(e.target.value))}
                />
              </h5>
            </div>
            <div className="Add-Electrum">
              <h5>
                Electrum Pieces:
                <input
                  name="electrumPieces"
                  type="number"
                  defaultValue={electrumPieces}
                  onChange={e => setElectrumPieces(parseInt(e.target.value))}
                />
              </h5>
            </div>
            <div className="Add-Gold">
              <h5>
                Gold Pieces:
                <input
                  name="goldPieces"
                  type="number"
                  defaultValue={goldPieces}
                  onChange={e => setGoldPieces(parseInt(e.target.value))}
                />
              </h5>
            </div>
            <div className="Add-Platinum">
              <h5>
                Platinum Pieces:
                <input
                  name="platinumPieces"
                  type="number"
                  defaultValue={platinumPieces}
                  onChange={e => setPlatinumPieces(parseInt(e.target.value))}
                />
              </h5>
            </div>
            <div className="Put-Money-Button-Parent">
              <button className="Put-Money-Button">Submit Money</button>
            </div>
          </form>
          <div className="Put-Equip-Button-Parent">
            <button className="Put-Equip-Button-Parent" onclick={postEquip}>
              Submit Equipment
            </button>
            <div className="Current-Equipment">
              <ul className="Equip-List">
                {equip.map(item => {
                  return (
                    <EquipLI
                      key={item.id}
                      id={item.id}
                      equipName={item.equipName}
                      bonus={item.bonus}
                      description={item.description}
                      isWeapon={item.isWeapon}
                    />
                  )
                })}
              </ul>
            </div>
            <form className="Add-Equipment" onSubmit={postEquip}>
              <div className="Adding-Item">
                <h5>
                  Name or Type of Item:
                  <input name="equipName" type="text" onChange={updateItem} />
                  <br></br>
                  Bonuses Conferred (if any):
                  <input name="bonus" type="text" onChange={updateItem} />
                  <br></br>
                  Item Description:
                  <input name="description" type="text" onChange={updateItem} />
                  Is This Item a Weapon?
                  <input
                    className="isWeapon"
                    name="isWeapon"
                    type="radio"
                    value="true"
                    onChange={updateBoolItem}
                  />{' '}
                  Yes
                  <input
                    className="isWeapon"
                    name="isWeapon"
                    type="radio"
                    value="false"
                    onChange={updateBoolItem}
                  />{' '}
                  No
                </h5>
              </div>
              <div className="Put-Equip-Button-Parent">
                <button className="Put-Equip-Button-Parent">
                  Submit Equipment
                </button>
              </div>
            </form>
          </div>
        </section>
      </article>
    </div>
  )
}

export default EquipmentUpdate
