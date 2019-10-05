import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    apiResponse: ""
  }


  /* ---- Lifecycle Methods ----*/
  componentDidMount() {
    fetch('http://localhost:3001/api/notions')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  render() {
    return (
      <div className="App">
        <h1>Notion</h1>
        <p>{this.state.apiResponse}</p>
      </div>
    )
  };

}

export default App;