import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const CreateSkill = props => {
  const characterId = props.match.params.id

  const [skill, setSkill] = useState()
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [stat, setStat] = useState()

  const getStatDetails = async characterId => {
    return await axios.get('/api/stat/', characterId).then(response => {
      //set var for character from axios get
      setStat(response.data)
      console.log('stat get' + response.data)
    })
  }

  //render
  if (shouldRedirect) {
    return <Redirect to={`/CharacterDetails/${characterId}`} />
  }
  return (
    <div>
      <article className="Create-Skill-Flex">
        <section className="Create-Skill-Parent">
          <div className="Create-Skill">
            <form className="Create-Skill-Form" onSubmit={createNewSkill}>
              <div className="Site-Icon"></div>
              <h3>Skills:</h3>
            </form>
          </div>
        </section>
      </article>
    </div>
  )
}

export default CreateSkill
