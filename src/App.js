import React, { Component } from 'react';
import './App.css';

import SpellList from './spells/SpellList'
import SpellAdd from './spells/SpellAdd'

class App extends Component {
  render() {
    return (
      <div>
        <SpellList/>
        <SpellAdd/>
      </div>
    );
  }
}

export default App;
