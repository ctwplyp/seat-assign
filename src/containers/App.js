import React, { Component } from 'react'
import '../App.css'
import Display from './Display'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Seat/Table Assignments</p>
        </header>
        <Display />
      </div>
    );
  }
}

export default App;
