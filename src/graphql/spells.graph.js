import { gql } from 'react-apollo'

export const fetchAllSpells = gql`
  {
    allSpells (first: 10) {
      id
      name
    }
  }
`

export const addSpell = gql`
  mutation addSpell($name: String!) {
    createClass(name: $name) {
      id
      name
    }
  }
`