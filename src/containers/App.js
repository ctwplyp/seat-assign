import React, { Component } from 'react'
import '../App.css'
import Display from './Display'
import Sidebar from '../components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Seat/Table Assignments</p>
        </header>
        <main>
          <Display />
          <Sidebar />
        </main>
      </div>
    );
  }
}

export default App;
