import React, { Component } from 'react';
import {Provider} from 'unstated';
import UNSTATED from 'unstated-debug';
import Tabs from './tabs.js';
import './App.css';

UNSTATED.logStateChanges = false;

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Tabs />
        </div>
      </Provider>
    );
  }
}

export default App;
