import React, { useState, useEffect } from 'react'
import axios from 'axios'

const StatUpdate = props => {
  const characterId = parseInt(props.match.params.id)
  //create vars to hold stat and skill in state
  const [stat, setStat] = useState({})
  const [skill, setSkill] = useState({})

  // api call to pull in stats from db
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

  //call useEffect to getStats when page loads
  useEffect(() => {
    getStatDetails(characterId)
    getSkillDetails(characterId)
  }, [])
  return <div></div>
}

export default StatUpdate
