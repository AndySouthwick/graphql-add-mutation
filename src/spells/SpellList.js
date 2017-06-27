import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { fetchAllSpells } from '../graphql/spells.graph'

class SpellList extends Component {
  render () {
    let spells = null
    if(this.props.data.allSpells) {
      spells = this.props.data.allSpells.map((spell, idx) => {
        return (<h4 key={idx}>{spell.name}</h4>)
      })
    }

    return (
      <div>
        <h1>SpellList</h1>
        {spells}
      </div>
    )
  }
}

export default graphql(fetchAllSpells)(SpellList)
