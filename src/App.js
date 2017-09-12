import React, { Component } from 'react';

import Clock from './Clock';
import Toggle from './Toggle';
import Greetings from './Greetings';

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <Toggle />
        <Greetings />
      </div>
    );
  }
}

export default App;
