import React, { Component } from 'react';
import "./App.css";

import LogInUI from './components/LogInUI';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isSignedIn: false }
  }


  render() {
    return (
      <div className="App">
        <LogInUI firebase={this.props.firebase}/>
      </div>
    )
  }
}

export default App;
