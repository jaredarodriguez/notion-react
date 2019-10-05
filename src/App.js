import React, { Component } from 'react';
import './App.css';

class App extends Component() {
  state = {
    isShowing: true,
    posts: []
  }

  handleShowForm = event => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

}

export default App;
