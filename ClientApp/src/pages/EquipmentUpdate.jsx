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
  let equipArr = []
  let item = {}

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
      setCopperPieces(response.data.copperPieces)
      setSilverPieces(response.data.silverPieces)
      setElectrumPieces(response.data.electrumPieces)
      setGoldPieces(response.data.goldPieces)
      setPlatinumPieces(response.data.platinumPieces)
      console.log('Money get' + response.data)
      if (response.data === {}) {
        setMoneyExists(false)
      } else {
        setMoneyExists(true)
      }
    })
  }

  //useEffect to call axios get when page loads
  useEffect(() => {
    getEquipDetails(characterId)
    getMoneyDetails(characterId)
  }, [])

  //take user inputs from item and push to equipArr
  const saveItem = item => {
    item.characterId = characterId
    equipArr.push(item)
    console.log(equipArr)
    item = {}
  }

  //call axios put to update equip
  const putEquip = async e => {
    setEquip(equipArr)
    console.log(equip)
    e.preventDefault()
    const resp = await axios.post('api/equip/create', equip)
    if (resp.status === 200 || resp.status === 201) {
      // redirect page to char details
      console.log(resp.data)
    } else {
      //display an error message
      throw new MessageEvent()
    }
  }

  //call axios put to update money
  const putMoney = async e => {
    setMoney({
      copperPieces: copperPieces,
      silverPieces: silverPieces,
      electrumPieces: electrumPieces,
      goldPieces: goldPieces,
      platinumPieces: platinumPieces,
    })
    e.preventDefault()
    if (moneyExists) {
      //if money already in db, run put
      const resp = await axios.put('api/money/put', money)
      if (resp.status === 200 || resp.status === 201) {
        // redirect page to char details
        console.log(resp.data)
      } else {
        //display an error message
        throw new MessageEvent()
      }
    } else {
      //else - (no money in db) run post
      const resp = await axios.post('api/money/create', money)
      if (resp.status === 200 || resp.status === 201) {
        // redirect page to char details
        console.log(resp.data)
      } else {
        //display an error message
        throw new MessageEvent()
      }
    }
  }

  //redirect after put
  if (shouldRedirect) {
    return <Redirect to={`/CharacterDetails/${characterId}`} />
  }
  //render
  return (
    <div className="Equipment-Update">
      <article className="Equip-Update-Flex">
        <section className="Equip-Update-Parent">
          <div className="Put-Money-Button-Parent">
            <button className="Put-Money-Button" onclick={putMoney}>
              Submit Money
            </button>
          </div>
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
          <div className="Add-Money">
            <div className="Add-Copper">
              <h5>
                Copper Pieces:
                <input
                  name="copperPieces"
                  type="number"
                  defaultValue={copperPieces}
                  onChange={e => setCopperPieces(e.target.value)}
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
                  onChange={e => setSilverPieces(e.target.value)}
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
                  onChange={e => setElectrumPieces(e.target.value)}
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
                  onChange={e => setGoldPieces(e.target.value)}
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
                  onChange={e => setPlatinumPieces(e.target.value)}
                />
              </h5>
            </div>
            <div className="Put-Money-Button-Parent">
              <button className="Put-Money-Button" onclick={putMoney}>
                Submit Money
              </button>
            </div>
          </div>
          <div className="Put-Equip-Button-Parent">
            <button className="Put-Equip-Button-Parent" onclick={putEquip}>
              Submit Equipment
            </button>
            <div className="Current-Equipment">
              <ul className="Equip-List">
                {equip.map(item => {
                  return (
                    <EquipLI
                      key={item.id}
                      equipName={item.equipName}
                      bonus={item.bonus}
                      description={item.description}
                      isWeapon={item.isWeapon}
                    />
                  )
                })}
              </ul>
            </div>
            <div className="Add-Equipment">
              <div className="Adding-Item">
                <h5>
                  Name or Type of Item:
                  <input
                    name="equipName"
                    type="text"
                    onChange={e => (item.name = e.target.value)}
                  />
                  <br></br>
                  Bonuses Conferred (if any):
                  <input
                    name="bonus"
                    type="text"
                    onChange={e => (item.bonus = e.target.value)}
                  />
                  <br></br>
                  Item Description:
                  <input
                    name="description"
                    type="text"
                    onChange={e => (item.description = e.target.value)}
                  />
                  Is This Item a Weapon?
                  <input
                    className="isWeapon"
                    name="isWeapon"
                    type="radio"
                    checked={item.isWeapon === true}
                    onChange={e => (item.isWeapon = true)}
                  />{' '}
                  Yes
                  <input
                    className="isWeapon"
                    name="isWeapon"
                    type="radio"
                    checked={item.isWeapon === false}
                    onChange={e => (item.isWeapon = false)}
                  />{' '}
                  No
                </h5>
              </div>
              <div className="Save-Item-Button-Parent">
                <button className="Save-Item-Button" onclick={saveItem}>
                  Save Item
                </button>
              </div>
            </div>
          </div>
          <div className="Put-Equip-Button-Parent">
            <button className="Put-Equip-Button-Parent" onclick={putEquip}>
              Submit Equipment
            </button>
          </div>
        </section>
      </article>
    </div>
  )
}

export default EquipmentUpdate
