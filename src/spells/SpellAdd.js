import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { addSpell } from '../graphql/spells.graph'

class SpellAdd extends Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }

  addSpell = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        name: this.state.name
      }
    })
  }

  render () {
    return (
      <form onSubmit={this.addSpell}>
        <h3>Add A Spell</h3>
        <input type="text" onChange={(evt) => this.setState({ name: evt.target.value }) } />
        <button type="submit">Add It!</button>
      </form>
    )
  }
}

export default graphql(addSpell)(SpellAdd)
