import React, { Component } from 'react';
import FreeInput from './Components/FreeInput';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="InputControls">
          <FreeInput></FreeInput>
        </section>
      </div>
    );
  }
}

export default App;
